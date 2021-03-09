import React, { Component } from "react";
import ReactGA from "react-ga";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import About from "./Components/About";
import Resume from "./Components/Resume";
import Portfolio from "./Components/Portfolio";
import resumeData from "./Data/resumeData.json";
import ParticlesBg from "particles-bg";

class App extends Component {
  constructor(props) {
    super(props);
    ReactGA.initialize("UA-110570651-1");
    ReactGA.pageview(window.location.pathname);
  }

  render() {
    return (
      <div className="App">
        <ParticlesBg color="#04d9ff" num={20} type="cobweb" bg={true} />
        <Header data={resumeData.main} />
        <About data={resumeData.main} />
        <Resume data={resumeData.resume} />
        <Portfolio data={resumeData.portfolio} />
        <Footer data={resumeData.main} />
      </div>
    );
  }
}

export default App;
