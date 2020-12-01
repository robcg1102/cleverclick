import { Component } from "react";
import { NavLink, withRouter } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <NavLink className="navbar-brand" to="/" activeClassName={this.props.location.pathname === '/' ? "active" : null}>
          Inicio
        </NavLink>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse text-right" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <NavLink className="nav-link" to="/admission" activeClassName={this.props.location.pathname === '/admission' ? "active" : null}>
              Admisión
            </NavLink>
            <NavLink className="nav-link" to="/engineering" activeClassName={this.props.location.pathname === '/engineering' ? "active" : null}>
              Ingeniería
            </NavLink>
            <NavLink className="nav-link" to="/technical" activeClassName={this.props.location.pathname === '/technical' ? "active" : null}>
              Técnico
            </NavLink>
          </div>
        </div>
      </nav>
    );
  }
}

export default withRouter(Navbar);
