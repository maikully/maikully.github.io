import React, { Component } from 'react'
import ReactGA from 'react-ga4'
import './App.css'
import Header from './Components/Header'
import Footer from './Components/Footer'
import About from './Components/About'
import Resume from './Components/Resume'
import Portfolio from './Components/Portfolio'
import resumeData from './Data/resumeData.json'
import ParticlesBg from 'particles-bg'


class App extends Component {
  setGA = () => {
    ReactGA.initialize('G-FZQGHMXF1K');
    ReactGA.send("pageview");
  };
  componentDidMount(){
    this.setGA();
  }

  render () {
    return (
      <div className='App'>
        <ParticlesBg color='#04d9ff' num={10} type='cobweb' bg={true} />
        <Header data={resumeData.main} />
        <About data={resumeData.main} />
        <Portfolio data={resumeData.portfolio} />
        <Footer data={resumeData.main} />
      </div>
    )
  }
}

export default App
