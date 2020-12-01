import { Component } from "react";
import { NavLink, withRouter } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <div className="d-flex flex-grow-1">
            <NavLink className="navbar-brand-two mx-auto " to="/">
              <img
                className="logo"
                src="https://res.cloudinary.com/robcg1102/image/upload/v1606585180/ciisa/logo_zarwvz.svg"
                alt="ciisa-logo"
              />
            </NavLink>
            <div className="w-100 text-right">
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#myNavbar"
              >
                <span className="navbar-toggler-icon" />
              </button>
            </div>
          </div>
          <div
            className="collapse navbar-collapse flex-grow-1 text-center"
            id="myNavbar"
          >
            <ul className="navbar-nav ml-auto flex-nowrap color1 text-center">
              <li className="nav-item">
                <NavLink to="/" className="nav-link m-2 menu-item " activeClassName={this.props.location.pathname === '/' ? "active" : null}>
                  <p>
                    Inicio
                  </p>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/beneficios" className="nav-link m-2 menu-item " activeClassName={this.props.location.pathname === '/beneficios' ? "active" : null}>
                  <p>
                    Beneficios
                  </p>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default withRouter(Navbar);
