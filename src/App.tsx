import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Container, Nav } from "react-bootstrap";
import PortfolioSlideshow from "./PortfolioSlideshow";
import About from "./About";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faGithub , faLinkedin} from '@fortawesome/free-brands-svg-icons';

function App() {
  return (
    <>
      <Navbar bg="dark" variant="dark" sticky="top">
        <Container>
          <Navbar.Brand href="#about">Nick Pisciotta</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#portfolio">Projects</Nav.Link>
            <Nav.Link href="https://github.com/Piscionj" target="_blank"> <FontAwesomeIcon icon={faGithub} /></Nav.Link>
            <Nav.Link href="https://www.linkedin.com/in/nick-pisciotta-793609182/" target="_blank"> <FontAwesomeIcon icon={faLinkedin} /></Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <About />
      <PortfolioSlideshow />
    </>
  );
}

export default App;
