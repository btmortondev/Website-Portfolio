import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import Work from './Work';
import About from './About';
import Contact from './Contact';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
      <Navbar />
      <div>
          <Switch>
            <Route exact path= "/">
              <Home />
            </Route>
            <Route path= "/work">
              <Work />
            </Route>
            <Route path= "/about">
              <About />
            </Route>
            <Route path= "/contact">
              <Contact />
            </Route>
          </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
