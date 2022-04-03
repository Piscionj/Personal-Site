import React from 'react'
import { Carousel } from 'react-bootstrap'

const ProjectCarousel = () => {
  return (
    <Carousel interval={5000}>
        <Carousel.Item>
            <a
              href="https://devpost.com/software/proteam-transportation-08"
              target="_blank"
            >
              <img height={500} src="commuteindy.jpg" alt="Commute indy app" />
            </a>
          <div>
            <h5>CommuteIndy</h5>
            <p>An Android app that organizes local transportation options into one convenient place, allowing users to easily create a "community" through public transportation</p>
          </div>
        </Carousel.Item>
        <Carousel.Item>
            <a
              href="https://javabubblebobble.web.app/"
              target="_blank"
            >
              <img height={500} src="bubble-bobble.png" alt="Bubble bobble title screen" />
            </a>
          <div>
            <h5>Bubble Bobble</h5>
            <p>A freshman year Java coding class project exported to the web using CheerpJ</p>
          </div>
        </Carousel.Item>
      </Carousel>
  )
}

export default ProjectCarousel