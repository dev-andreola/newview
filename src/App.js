import "./App.css";
import Brand from "./components/brand/Brand";
import Navbar from "./components/navbar/Navbar";
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
      </div>
    </div>
  );
}

export default App;
