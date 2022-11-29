import React, { Component } from 'react'
import { Fade } from 'react-bootstrap'
import FadeSection from './FadeSection'
import { BsLink45Deg } from 'react-icons/bs'

class About extends Component {
  calculateAge (birthday) {
    // birthday is a date
    var ageDifMs = Date.now() - birthday.getTime()
    var ageDate = new Date(ageDifMs) // miliseconds from epoch
    return Math.abs(ageDate.getUTCFullYear() - 1970)
  }
  render () {
    if (this.props.data) {
      var name = this.props.data.name
      var profilepic = 'images/' + this.props.data.image
      var lastfm = 'images/lastfm.png'
      var phone = this.props.data.phone
      var email = this.props.data.email
      var resumeDownload = this.props.data.resumedownload
      var age = this.calculateAge(new Date('March 16, 2001 00:00:00'))
      console.log(this.props.data.education)
      var education = this.props.data.education.map(function (education) {
        return (
          <FadeSection>
            <div
              key={education.school}
              style={{ marginBottom: '5vh'}}
              className='educationDiv'
            >
              <h3 style={{ color: 'rgba(255, 255, 255, 0.8)' }}>
                {education.school}
              </h3>
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
            <div key={work.company} style={{ marginBottom: '5vh' }}>
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
    }

    return (
      <section id='about'>
        <div className='row' style={{ marginBottom: '10vh' }}>
          <div className='three columns'>
            <FadeSection>
              <img className='profile-pic' src={profilepic} alt='Michael Li' />
            </FadeSection>
          </div>
          <div className='nine columns main-col'>
            <FadeSection>
              <h1 style={{ color: 'white', marginBottom: 50 }}>About Me</h1>
              <p style={{ fontSize: 'medium' }}>
                I'm a software programmer and musician at Brown University
                studying computer science and music. Some of my projects are
                kept here.
              </p>
            </FadeSection>
            <FadeSection>
              <p>
                <a href='opinions.html'>
                  Some opinions I have about music <BsLink45Deg />
                </a>
                <br></br>
              </p>
              <div className='columns download'>
                <p>
                  <a
                    href={resumeDownload}
                    target='_blank'
                    rel='noreferrer noopener'
                    className='button'
                  >
                    <i className='fa fa-download'></i>Download Resume
                  </a>
                </p>
              </div>
            </FadeSection>
          </div>
        </div>
        <div id='grid' style={{marginBottom:"25vh"}}>
          <div id='areaA' style={{marginBottom:"20vh", marginTop:"0px"}}>
                {education}</div>
          <div id='areaB'>
                {work}</div>
        </div>
      </section>
    )
  }
}

export default About
