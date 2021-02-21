import logo from './logo.svg';
import './App.css';
import Navbar from "./components/navbar"
import Leftmenu from "./components/leftmenu"
import Home from "./views/home"
import Lottery from "./views/lottery"
import Farm from "./views/farm"
import "./responsive.scss";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
    <Router>
    <div className="App">
      <Navbar/>
      <div className="main-sec">
        <Leftmenu/>
        
          <Switch>
            <Route path="/farm">
              <Farm />
            </Route>
            <Route path="/lottery">
              <Lottery />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
  
      </div>
    </div>
    </Router>
  );
}

export default App;
