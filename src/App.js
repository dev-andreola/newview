import "./App.css";
import Brand from "./components/brand/Brand";
import Navbar from "./components/navbar/Navbar";
import Experiences from "./containers/experiences/Experiences";
import Header from "./containers/header/Header";

function App() {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <Experiences />
    </div>
  );
}

export default App;
