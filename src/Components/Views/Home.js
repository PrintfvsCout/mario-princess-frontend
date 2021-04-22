import React from "react"
import { Carousel } from "react-bootstrap"

import Mips from "../../mips.jpeg"

const About = () => {
  return (
    <div style={{ backgroundColor: "aqua" }}>
      <Carousel animation="false">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Mips}
            alt="First slide"
            style={{ height: "360px", width: "400px" }}
          />
          <Carousel.Caption>
            <h3>How to play</h3>
            <p>
              You need to select the positions of Mario and the Princess. There
              can be only one Mario and one Princess at the same time on the
              grid, selecting the obsticles is optional, but it will make Mario
              harder to find the princess so he needs to avoid them. After you
              are satisficed with the positions click submit and wait for Mario
              to find his Princess
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Mips}
            alt="Second slide"
            style={{ height: "360px", width: "400px" }}
          />

          <Carousel.Caption>
            <h3>Frameworks used</h3>
            <p>
              Flask and SQLAlchemy for the backend, React.js, React bootstrap
              for the frontend
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default About
