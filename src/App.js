import "./App.css";
import Brand from "./components/brand/Brand";
import Cta from "./components/cta/Cta";
import Navbar from "./components/navbar/Navbar";
import Blog from "./containers/blog/Blog";
import Comunity from "./containers/comunity/Comunity";
import Experiences from "./containers/experiences/Experiences";
import Header from "./containers/header/Header";
import Tecnology from "./containers/tecnology/Tecnology";

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
    </div>
  );
}

export default App;
