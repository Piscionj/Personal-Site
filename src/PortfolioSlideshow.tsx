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
              <img src="commuteindy.jpg" alt="First slide" />
            </a>
          </div>
          <Carousel.Caption>
            <h5>CommuteIndy</h5>
            <p>An Android app that organizes local transportation options into one convenient place, allowing users to easily create a "community" through public transportation.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </section>
  );
};

export default PortfolioSlideshow;
