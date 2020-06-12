import React, { Component } from "react";

class Contact extends Component {
  render() {
    if (this.props.data) {
      var message = this.props.data.contactmessage;
    }

    return (
      <section id="contact">
        <h2 style={{ color: "white", textAlign: "center" }}>Contact me!</h2>
        <div className="nine columns main-col">
          <h3 style={{ color: "gray", fontSize: 14 }}>
            <a href="michael_s_li@brown.edu">email</a>
            <br></br>
            <a href="https://www.linkedin.com/in/michael-li-14a4908b/">
              LinkedIn
            </a>
          </h3>
        </div>
      </section>
    );
  }
}

export default Contact;
