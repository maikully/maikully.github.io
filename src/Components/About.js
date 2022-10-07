import React, { Component } from 'react'
import { Fade } from 'react-bootstrap'
import FadeSection from './FadeSection'

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
    }

    return (
      <section id='about'>
        <div className='row' style={{ marginBottom: '50vh' }}>
          <FadeSection>
            <div className='three columns'>
              <img className='profile-pic' src={profilepic} alt='Michael Li' />
            </div>
          <div className='nine columns main-col'>
            <h1 style={{ color: 'white', marginBottom: 50 }}>About Me</h1>

            <p style={{fontSize:"medium"}}>
              I'm a {age}-year-old software programmer and musician at Brown
              University studying computer science and music. Some
              of my programming and musical works are kept here.
            </p>
            <p>
              <a href='opinions.html'>Some opinions I have about music</a>
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
          </div>
          </FadeSection>
        </div>
      </section>
    )
  }
}

export default About
