import { Component } from "react";
import axios from "axios";

class Engineering extends Component {
  state = {
    users: "",
  };

  componentDidMount() {
    axios.get("http://localhost:3001/api/users/engineering").then((users) => {
      const dataUsers = users.data.users;
      this.setState({
        users: dataUsers,
      });
    });
  }

  render() {
    const usersInfo = this.state.users;
    if (!this.state.users) {
      return (
        <div className="container-fluid p-3">
          <h3>Cargando...</h3>
        </div>
      );
    }
    return (
      <div>
        <div className="container-fluid p-3">
        <h2>Ingeniería</h2>
          <table className="table table-success table-hover ">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Nombre</th>
                <th scope="col">Correo</th>
                <th scope="col">Teléfono</th>
                <th scope="col">Carrera</th>
              </tr>
            </thead>
            <tbody>
              {usersInfo.map((user, index) => {
                return (
                  <tr key={user._id}>
                    <th scope="row">{index + 1}</th>
                    <td>{user.data.name}</td>
                    <td>{user.data.email}</td>
                    <td>{user.data.phone}</td>
                    <td>{user.data.career}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Engineering;
