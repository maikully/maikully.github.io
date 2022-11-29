import React, { Component } from 'react'
import { Fade } from 'react-bootstrap'
import FadeSection from './FadeSection'

class Resume extends Component {
  render () {
    if (this.props.data) {
      var education = this.props.data.education.map(function (education) {
        return (
          <FadeSection>
            <div key={education.school} style={{ marginBottom: '20vh' }}>
              <h3>{education.school}</h3>
              <p className='infotwo'>
                {education.degree}{' '}
                <span style={{ marginLeft: 5, marginRight: 7 }}>&bull;</span>
                <em className='date'>{education.graduated}</em>
              </p>
              <p className='info'>{education.description}</p>
            </div>
          </FadeSection>
        )
      })
      var work = this.props.data.work.map(function (work) {
        return (
          <FadeSection>
            <div key={work.company} style={{ marginBottom: '10vh' }}>
              <h3>{work.company}</h3>
              <p className='infotwo'>
                {work.title}
                <span style={{ marginLeft: 7, marginRight: 7 }}>
                  &bull;
                </span>{' '}
                <em className='date'>{work.years}</em>
              </p>
              <p className='info'>{work.description}</p>
            </div>
          </FadeSection>
        )
      })
      var listmskills = this.props.data.mskills.map(function (mskill) {
        var className = 'bar-expand ' + mskill.name.toLowerCase()
        return (
            <li key={mskill.name}>
              <span style={{ width: 200 }} className={className}></span>
              <em>{mskill.name}</em>
            </li>
        )
      })
      var listcskills = this.props.data.cskills.map(function (cskill) {
        var className = 'bar-expand ' + cskill.name.toLowerCase()
        return (
            <li key={cskill.name}>
              <span style={{ width: 200 }} className={className}></span>
              <em>{cskill.name}</em>
            </li>
        )
      })
      var skills = () => {
        return (
          <div class='row'>
            <div class='column'>{listcskills}</div>
            <div class='column'>{listmskills}</div>
          </div>
        )
      }
    }

    return (
      <section id='resume'>
        <FadeSection>
          <h1>Education</h1>
        </FadeSection>
        <div className='row'>
          <div className='row item' style={{ marginBottom: '50vh' }}>
            <div className='twelve columns'>{education}</div>
          </div>
        </div>

        <FadeSection>
          <h1>Experience</h1>
        </FadeSection>

        <div className='row'>
          <div className='twelve columns'>{work}</div>
        </div>
        {/* 
        <FadeSection>
          <h1 style={{ marginTop: '60vh' }}>Skills</h1>
        </FadeSection>
        <div className='row skill' style={{ marginBottom: '50vh' }}>
          <FadeSection>
          <div class='row'>
            <div className='bars'>
              <div class='column' style={{ padding: 0 }}>
                <ul className='skills'>{listcskills}</ul>
              </div>
            </div>
            <div className='bars'>
              <div class='column' style={{ padding: 0 }}>
                <ul className='skills'>{listmskills}</ul>
              </div>
            </div>
          </div>
          </FadeSection>
        </div>*/}
      </section>
    )
  }
}

export default Resume
