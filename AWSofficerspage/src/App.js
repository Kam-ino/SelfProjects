import { React, useState, createContext } from "react";
import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home'
import Innovation from './pages/Innovation';
import Team from './pages/Team';
import About from './pages/About';

export const NameContext = createContext();

const NameContextProvider = ({ children }) => {
  const [name, setName] = useState(undefined);

  return (
      <NameContext.Provider value={{ name, setName }}>
          {children}
      </NameContext.Provider>
  );
};

function App() {
  let component
  switch (window.location.pathname){
    case "/":
      component = <Home />
      break
    case "/about":
      component = <About />
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
        <NameContextProvider/ >
        <h1>App Components</h1>
        <Navbar />
        {component}
      </div>
    </div>
  );
}


export default App;
