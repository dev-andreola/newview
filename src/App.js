import "./App.css";
import {
  Footer,
  Blog,
  Comunity,
  Tecnology,
  Experiences,
  Header,
} from "./containers";
import { Cta, Brand, Navbar } from "./components";

function App() {
  return (
    <div className="App">
      <div className="gradient__bg container__shadow">
        <Navbar />
        <Header />
      </div>
      <div className="radial__gradient">
        <Brand />
        <Experiences />
        <Tecnology />
        <Comunity />
        <Cta />
        <Blog />
      </div>
      <Footer />
    </div>
  );
}

export default App;
