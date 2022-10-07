import React, { Component } from 'react'
import { Fade } from 'react-bootstrap'
import FadeSection from './FadeSection'

class Portfolio extends Component {
  render () {
    if (this.props.data) {
      var csProjects = this.props.data.csProjects.map(function (projects) {
        var projectImage = 'images/portfolio/' + projects.image
        return (
          <div key={projects.title} className='columns portfolio-item'>
            <FadeSection>
              <a
                href={projects.url}
                title={projects.title}
                target='_blank'
                rel='noreferrer noopener'
              >
                <img
                  className='portfolioimg'
                  alt={projects.title}
                  src={projectImage}
                />
                <div className='overlay'>
                  <div className='portfolio-item-meta'>
                    <h5>{projects.title}</h5>
                    <p className='info'>{projects.category}</p>
                  </div>
                </div>
              </a>
            </FadeSection>
          </div>
        )
      })
      var musicProjects = this.props.data.musicProjects.map(function (
        projects
      ) {
        var projectImage = 'images/portfolio/' + projects.image
        return (
          <div key={projects.title} className='columns portfolio-item'>
            <FadeSection>
              <a
                href={projects.url}
                title={projects.title}
                target='_blank'
                rel='noreferrer noopener'
              >
                <img
                  alt={projects.title}
                  className='portfolioimg'
                  src={projectImage}
                />
                <div className='overlay'>
                  <div className='portfolio-item-meta'>
                    <h5>{projects.title}</h5>
                    <p className='info'>{projects.category}</p>
                  </div>
                </div>
              </a>
            </FadeSection>
          </div>
        )
      })
    }

    return (
      <section id='portfolio'>
        <div className='row' style={{ marginBottom: '20vh' }}>
          <div
            id='portfolio-wrapper'
            className='bgrid-quarters s-bgrid-thirds cf'
          >
            <FadeSection>
              <h1>CS Projects</h1>
            </FadeSection>
            {csProjects}
            <FadeSection>
              <h1 style={{ marginTop: '100vh' }}> Music Projects </h1>
            </FadeSection>
            {musicProjects}
          </div>
        </div>
      </section>
    )
  }
}

export default Portfolio
