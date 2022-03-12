import { Carousel } from "react-bootstrap";

const PortfolioSlideshow = () => {
  return (
    <section id="portfolio">
      <h1>Projects 💻</h1>
      <Carousel interval={5000}>
        <Carousel.Item>
          <div>
            <a
              href="https://devpost.com/software/proteam-transportation-08"
              target="_blank"
            >
              <img height={500} src="commuteindy.jpg" alt="Commute indy app" />
            </a>
          </div>
          <Carousel.Caption>
            <h5>CommuteIndy</h5>
            <p>An Android app that organizes local transportation options into one convenient place, allowing users to easily create a "community" through public transportation</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div>
            <a
              href="https://javabubblebobble.web.app/"
              target="_blank"
            >
              <img height={500} src="bubble-bobble.png" alt="Bubble bobble title screen" />
            </a>
          </div>
          <Carousel.Caption>
            <h5>Bubble Bobble</h5>
            <p>A freshman year Java coding class project exported to the web using CheerpJ</p>
            <p>Move with the arrow keys and shoot with the space bar</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </section>
  );
};

export default PortfolioSlideshow;
