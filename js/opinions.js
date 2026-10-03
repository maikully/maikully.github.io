function element(tag, text) {
  const node = document.createElement(tag)
  if (text !== undefined) node.textContent = text
  return node
}

function renderRecord(record) {
  const item = element('li')
  const content = record.url ? element('a') : item
  if (record.url) {
    content.className = 'album'
    content.href = record.url
    item.append(content)
  }
  content.append(element('b', record.title), ` (${record.year}) - ${record.artist}`)
  return item
}

function renderOpinions(data) {
  const albums = document.getElementById('album-lists')
  data.albums.forEach(group => {
    if (group.entries.length) albums.append(element('h3', group.score))
    const list = element('ul')
    list.id = `album${group.score}`
    list.className = 'ba'
    list.append(...group.entries.map(renderRecord))
    albums.append(list)
  })

  const live = document.getElementById('seen-live-list')
  data['seen-live'].forEach(event => {
    const item = element('li')
    const program = element('b')
    event.program.forEach(part => {
      program.append(part.italic ? element('i', part.text) : part.text)
    })
    item.append(event.date, element('br'), program, ` | ${event.venue} | ${event.location}`)
    live.append(item, element('br'))
  })

  document.getElementById('classical-records-list').append(...data['classical-records'].map(renderRecord))
  ;['composers', 'conductors', 'pianists'].forEach(section => {
    const list = document.getElementById(`${section}-list`)
    data[section].forEach(person => {
      const item = element('li')
      item.append(element('b', person.name), ` (${person.nationality}, ${person.years})`)
      list.append(item)
    })
  })

  const count = data.albums.reduce((total, group) => total + group.entries.length, 0)
  const totalScore = data.albums.reduce((total, group) => total + group.score * group.entries.length, 0)
  document.getElementById('albumCount').textContent = count
  document.getElementById('avgScore').textContent = count ? (totalScore / count).toFixed(2) : '0.00'
  document.getElementById('lastUpdated').textContent = document.lastModified

  const scores = [...data.albums].sort((a, b) => a.score - b.score)
  new Chart(document.getElementById('myChart').getContext('2d'), {
    type: 'bar',
    data: {
      labels: scores.map(group => String(group.score)),
      datasets: [{
        label: '# of Albums',
        data: scores.map(group => group.entries.length),
        backgroundColor: 'maroon',
        borderColor: 'maroon',
        borderWidth: 1
      }]
    },
    options: {
      maintainAspectRatio: false,
      responsive: true,
      scales: { yAxes: [{ ticks: { beginAtZero: true } }] },
      legend: { display: false },
      tooltips: { callbacks: { label: tooltipItem => tooltipItem.yLabel } }
    }
  })
}

fetch('data/opinions.json')
  .then(response => {
    if (!response.ok) throw new Error('Unable to load opinions')
    return response.json()
  })
  .then(renderOpinions)
  .catch(() => {
    const message = element('p', 'Unable to load opinions. Please refresh the page to try again.')
    message.setAttribute('role', 'alert')
    document.getElementById('album-lists').prepend(message)
  })
