import { Component } from "react";
import { NavLink } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <div>
        <h1>Bienvenido</h1>
        <h3>CIISA - CRM</h3>
        <div className="container-md p-4">
          <div className="card" style={{ width: "18rem" }}>
            <div className="card-body">
              <h3 className="card-title">Admisión</h3>
              <p className="card-text">
                Usuarios que solicitan información a carrera de Admisión.
              </p>
              <NavLink to="/admission" className="btn btn-primary">
                Admisión
              </NavLink>
            </div>
          </div>
          <div className="card" style={{ width: "18rem" }}>
            <div className="card-body">
              <h3 className="card-title">Ingeniería</h3>
              <p className="card-text">
                Usuarios que solicitan información a carrera de Ingeniería.
              </p>
              <NavLink to="/engineering" className="btn btn-primary">
                Ingeniería
              </NavLink>
            </div>
          </div>
          <div className="card" style={{ width: "18rem" }}>
            <div className="card-body">
              <h3 className="card-title">Técnico</h3>
              <p className="card-text">
                Usuarios que solicitan información a carrera de Técnico.
              </p>
              <NavLink to="/technical" className="btn btn-primary">
                Técnico
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
