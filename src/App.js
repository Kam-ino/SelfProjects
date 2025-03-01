import logo from './logo.svg';
import './App.css';
import Carousel from './components/Carousel';
import Navbar from './components/Navbar';
import Home from './pages/Home'
import Innovation from './pages/Innovation';
import Team from './pages/Team';

function App() {
  let component
  switch (window.location.pathname){
    case "/":
      component = <Home />
      break
    case "/innovation":
      component = <Innovation />
      break
    case "/team":
      component = <Team />
      break
  }
  return (
    <div className="App">
      <div className="content">
        <h1>App Components</h1>
        <Navbar />
        {component}
      </div>
    </div>
  );
}

export default App;
