import { Component } from "react";

import { Switch, Route } from 'react-router-dom';
import "./App.css";
import Admission from "./components/Admission";
import Engineering from "./components/Engineering";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Technical from "./components/Technical";

class App extends Component {
 

  render() {
    
    return (
      <div className="App">
      <Navbar/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/admission" component={Admission}/>
          <Route exact path="/technical" component={Technical}/>
          <Route exact path="/engineering" component={Engineering}/>
        </Switch>
      </div>
    );
  }
}

export default App;
