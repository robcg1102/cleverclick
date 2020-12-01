import { Component } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import FooterComponent from "./components/Footer";
import { Switch, Route, withRouter } from "react-router-dom";
import Home from "./components/Home";
import Benefits from "./components/Benefits";
import Terms from "./components/Terms";
import Privacity from "./components/Privacity";

class App extends Component {
  state = {
    showComponent: true,
  };
  componentDidMount() {
    if (
      this.props.location.pathname === "/media/tos/tos" ||
      this.props.location.pathname === "/media/tos/ap"
    ) {
      this.setState({
        showComponent: false,
      });
    }
  }

  render() {
    return (
      <div className="App">
        <div>
          {this.state.showComponent && <Navbar />}
        </div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/beneficios" component={Benefits} />
          <Route exact path="/media/tos/tos" component={Terms} />
          <Route exact path="/media/tos/ap" component={Privacity} />
        </Switch>
        <div>
          {this.state.showComponent && <FooterComponent />}
        </div>
      </div>
    );
  }
}

export default withRouter(App);
