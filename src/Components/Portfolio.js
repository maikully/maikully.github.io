import React, { Component } from "react";

class Portfolio extends Component {
  render() {
    if (this.props.data) {
      var csProjects = this.props.data.csProjects.map(function (projects) {
        var projectImage = "images/portfolio/" + projects.image;
        return (
          <div key={projects.title} className="columns portfolio-item">
            <a href={projects.url} title={projects.title} target="_blank" rel="noreferrer noopener">
              <img alt={projects.title} src={projectImage} />
              <div className="overlay">
                <div className="portfolio-item-meta">
                  <h5 style={{ color: "#3F3F3F" }}>{projects.title}</h5>
                  <p style={{ color: "#555555" }}>{projects.category}</p>
                </div>
              </div>
            </a>
          </div>
        );
      });
      var musicProjects = this.props.data.musicProjects.map(function (
        projects
      ) {
        var projectImage = "images/portfolio/" + projects.image;
        return (
          <div key={projects.title} className="columns portfolio-item">
            <a href={projects.url} title={projects.title} target="_blank" rel="noreferrer noopener">
              <img alt={projects.title} src={projectImage} />
              <div className="overlay">
                <div className="portfolio-item-meta">
                  <h5 style={{ color: "#3F3F3F" }}>{projects.title}</h5>
                  <p style={{ color: "#555555" }}>{projects.category}</p>
                </div>
              </div>
            </a>
          </div>
        );
      });
    }

    return (
      <section id="portfolio">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>CS Projects</h1>

            <div
              id="portfolio-wrapper"
              className="bgrid-quarters s-bgrid-thirds cf"
            >
              {csProjects}
              <hr></hr>
              <h1> Music Projects </h1>
              {musicProjects}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Portfolio;
