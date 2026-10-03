const fs = require('fs')
const path = require('path')

const root = path.resolve(__dirname, '..')
const read = file => fs.readFileSync(path.join(root, file), 'utf8')
const escapeHtml = value => String(value).replace(/[&<>"']/g, character => ({
  '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
}[character]))
const assert = (condition, message) => {
  if (!condition) throw new Error(message)
}
const text = value => typeof value === 'string' && value.trim().length > 0
const validScore = value => Number.isFinite(value) && value >= 1 && value <= 10
const template = read('templates/album.html')
const opinions = JSON.parse(read('public/data/opinions.json'))
const albums = new Map()

for (const group of opinions.albums) {
  assert(validScore(group.score), 'Invalid album score')
  for (const album of group.entries) {
    if (!album.slug) continue
    assert(!albums.has(album.slug), `Duplicate album slug: ${album.slug}`)
    assert(text(album.title) && text(album.artist) && text(album.year), `Invalid metadata: ${album.slug}`)
    albums.set(album.slug, { ...album, score: group.score })
  }
}

const directory = path.join(root, 'data/albums')
const pages = new Map()
for (const file of fs.readdirSync(directory).filter(file => file.endsWith('.json')).sort()) {
  const review = JSON.parse(fs.readFileSync(path.join(directory, file), 'utf8'))
  const { slug } = review
  assert(text(slug) && /^[a-z0-9]+(?:[-&][a-z0-9]+)*$/.test(slug), `Invalid slug: ${file}`)
  assert(file === `${slug}.json`, `Filename must match slug: ${file}`)
  assert(!pages.has(slug), `Duplicate review slug: ${slug}`)
  const album = albums.get(slug)
  assert(album, `No album matches review: ${slug}`)
  if (album.url) assert(album.url === `albums/${slug}.html`, `Album URL must match slug: ${slug}`)
  assert(text(review.cover) && /^images\/[a-z0-9&._-]+$/i.test(review.cover), `Invalid cover path: ${slug}`)
  assert(fs.existsSync(path.join(root, 'public/albums', review.cover)), `Missing cover: ${slug}`)
  assert(text(review.coverAlt), `Missing cover description: ${slug}`)
  assert(Array.isArray(review.review), `Invalid review sections: ${slug}`)
  assert(Array.isArray(review.trackRatings), `Invalid track ratings: ${slug}`)
  const sections = review.review.map(section => {
    assert(section.heading === null || text(section.heading), `Invalid section heading: ${slug}`)
    assert(Array.isArray(section.paragraphs) && section.paragraphs.every(text), `Invalid paragraphs: ${slug}`)
    return (section.heading === null ? '' : `  <h2>${escapeHtml(section.heading)}</h2>\n`) +
      section.paragraphs.map(paragraph => `  <p>${escapeHtml(paragraph)}</p>\n`).join('')
  }).join('')
  const ratings = review.trackRatings.map(group => {
    assert(validScore(group.score) && Array.isArray(group.tracks) && group.tracks.every(text), `Invalid track group: ${slug}`)
    return `  <h2>${escapeHtml(group.score)}</h2>\n  <ul>\n` +
      group.tracks.map(track => `    <li>${escapeHtml(track)}</li>\n`).join('') + '  </ul>\n'
  }).join('')
  const values = Object.fromEntries(Object.entries({ ...album, cover: review.cover, coverAlt: review.coverAlt }).map(([key, value]) => [key, escapeHtml(value)]))
  values.review = sections
  values.trackRatings = ratings
  const page = template.replace(/\{\{(\w+)\}\}/g, (match, key) => {
    assert(Object.hasOwnProperty.call(values, key), `Unknown template field: ${key}`)
    return values[key]
  })
  pages.set(slug, page)
}

for (const slug of albums.keys()) assert(pages.has(slug), `Missing review: ${slug}`)
for (const group of opinions.albums) {
  for (const album of group.entries) {
    if (album.url && album.url.startsWith('albums/')) {
      assert(album.slug && pages.has(album.slug), `Missing review for linked album: ${album.title}`)
    }
  }
}

fs.mkdirSync(path.join(root, 'public/albums'), { recursive: true })
for (const [slug, page] of pages) fs.writeFileSync(path.join(root, 'public/albums', `${slug}.html`), page)
console.log(`Generated ${pages.size} album pages`)
