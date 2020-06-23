import React, { Component } from "react";
import Typewriter from "typewriter-effect";
import { Link } from "react-router-dom";
import "./Home.css";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      type: "",
      showBorder: true,
    };
  }

  render() {
    const style = {
      color: "black",
      backgroundColor: "rgba(163, 159, 220,0.5)",
    };
    return (
      <div className="container mainss">
        <div className="row mt-3 mr-3 ml-1">
          <h2 className="pt-3">Hi, I'm Yash</h2>
          <img
            src={require("../../assets/Images/lng.png")}
            alt="Me"
            width="70px"
          />
        </div>
        <div
          style={{ justifyContent: "center" }}
          className="row mt-5 mb-5 mr-3 ml-3"
        >
          <div className="row">
            <h2>I'm</h2>
            &nbsp;
            <h2>
              <Typewriter
                options={{
                  strings: [
                    " Web Developer",
                    " Self Learner",
                    " Front-End Developer",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h2>
          </div>
        </div>
        <div className="mt-5 ">
          <p>
            I made cool projects and{" "}
            <Link style={style} to="/projects">
              shared with the world.
            </Link>{" "}
            I can help you with your projects also, drop a mail at{" "}
            <span style={style}>yashgandhi876@gmail.com</span>
          </p>
          <p>
            Most of the time, I talk about web development and some really cool
            stuff on{" "}
            <a
              style={style}
              target="_blank"
              rel="noopener noreferrer"
              href="https://twitter.com/yashgandhi876"
            >
              twitter.
            </a>
          </p>
          <p>
            You can read more{" "}
            <Link style={style} to="/aboutme">
              about me.
            </Link>
          </p>
        </div>
      </div>
    );
  }
}

export default Home;