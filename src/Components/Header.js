import React, { Component } from 'react'
import FadeIn from 'react-fade-in'

class Header extends Component {
  render () {
    if (this.props.data) {
      var name = this.props.data.name
      var networks = this.props.data.social.map(function (network) {
        return (
          <li key={network.name}>
            <a href={network.url} target='_blank' rel='noreferrer noopener'>
              <i className={network.className}></i>
            </a>
          </li>
        )
      })
    }

    return (
      <header id='home' style={{ marginBottom: '50vh' }}>
        <nav id='nav-wrap'>
          <a className='mobile-btn' href='#nav-wrap' title='Show navigation'>
            Show navigation
          </a>
          <a className='mobile-btn' href='#home' title='Hide navigation'>
            Hide navigation
          </a>

          <ul id='nav' className='nav' style={{ marginLeft: '5vw' }}>
            <li className='current'>
              <a className='smoothscroll' href='#home'>
                Home
              </a>
            </li>
            <li>
              <a className='smoothscroll' href='#about'>
                About
              </a>
            </li>
            <li>
              <a className='smoothscroll' href='#resume'>
                Resume
              </a>
            </li>
            <li>
              <a className='smoothscroll' href='#portfolio'>
                Projects
              </a>
            </li>
          </ul>
        </nav>

        <div className='row banner'>
          <div className='banner-text'>
            <FadeIn>
              <h1 className='responsive-headline'>{name}</h1>
              <hr />
              <ul className='social'>{networks}</ul>
            </FadeIn>
          </div>
        </div>
      </header>
    )
  }
}

export default Header
