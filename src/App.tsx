import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import About from "./About";
import Projects from "./Projects";
import { HeaderMiddle } from "./Header";
import { MantineProvider } from "@mantine/core";
import Contact from "./Contact";

function App() {
  return (
    <MantineProvider theme={{ colorScheme: 'dark' }}>
      <HeaderMiddle links={[{link: '#', label: 'About'},{link: '#projects', label: 'Projects'}]} />
      <About />
      <Projects />
      {/* <Contact /> */}
      </MantineProvider>
  );
}

export default App;
