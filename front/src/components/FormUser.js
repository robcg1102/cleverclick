import React, { Component } from "react";
import axios from "axios";
import swal from "sweetalert";

class FormUser extends Component {
  state = {
    name: "",
    email: "",
    phone: "",
    career: "",
    keyCode: null,
    userCreated: false,
  };

  emailInput = React.createRef();

  sendData = (e) => {
    e.preventDefault();
    const { name, email, phone, career } = this.state;
    const mailRegex = new RegExp(
      /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/,
      "i"
    );

    // 956 380 880

    const phoneC = new RegExp(/^([2-9])(\s?)[9876543]\d{7}$/);
    const nameValidation = name.split(" ");
    if (name === "" || email === "" || phone === "" || career === "") {
      return swal(
        "Rellena todos los campos",
        "Es necesario ingresar todos los campos",
        "warning"
      );
    }

    if (nameValidation.length <= 1) {
      return swal(
        "Nombre y apellidos incompletos",
        "Debes completar tu nombre y apellido",
        "warning"
      );
    }
    if (nameValidation[0].length < 2 || nameValidation[1].length < 2) {
      return swal(
        "Nombre y apellidos incompletos",
        "Debes completar tu nombre y apellido",
        "warning"
      );
    }
    if (!mailRegex.test(email)) {
      return swal(
        "Correo Electrónico Inválido",
        "Debes introducir un correo electrónico válido",
        "warning"
      );
    }
    if (!phoneC.test(phone)) {
      return swal("Teléfono inválido", "Escribe un número válido", "warning");
    }
    axios
      .post("http://localhost:3001/api/users/create", {
        name,
        email,
        phone,
        career,
      })
      .then((resp) => {
        console.log(resp);
        this.setState({
          userCreated: true,
        });
        swal(
          "¡Gracias!",
          "Nos pondremos en contacto contigo a la brevedad",
          "success"
        );
      })
      .catch((err) => {
        console.log(err);
      });
  };

  openTerms = (e) => {
    e.preventDefault();

    var nuevaVentana = window.open(
      "/media/tos/tos",
      "",
      "width=300,height=400"
    );
    if (nuevaVentana) {
      nuevaVentana.focus();
    }
  };

  openPriv = (e) => {
    e.preventDefault();

    var nuevaVentana = window.open("/media/tos/ap", "", "width=300,height=400");
    if (nuevaVentana) {
      nuevaVentana.focus();
    }
  };

  changeInput = (e) => {
    const { name, value } = e.target;
    if (
      (name === "phone" && this.state.keyCode === 8) ||
      (name === "phone" &&
        this.state.keyCode >= 48 &&
        this.state.keyCode <= 57) ||
      (name === "phone" && this.state.keyCode === 8) ||
      (name === "phone" &&
        this.state.keyCode >= 96 &&
        this.state.keyCode <= 105)
    ) {
      this.setState({
        [name]: value,
      });
    } else if (name === "name" || name === "email" || name === "career") {
      this.setState({
        [name]: value,
      });
    }
  };

  phoneVer = (e) => {
    this.setState({
      keyCode: e.keyCode,
    });
  };
  render() {
    if (this.state.userCreated) {
      return (
        <div className="formUser">
          <div className="thankRes">
            <p>Gracias por proporcionarnos tus datos.</p>
            <p>Será un placer brindarte la información que necesites.</p>
          </div>
          <div className="thanksA">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://api.whatsapp.com/send?text=Estudia en CIISA una de nuestras carreras Online o Presencial, https://bit.ly/3kZppHL"
            >
              <button
                type="button"
                className="btn btn-success form-control btn-lg btnForm"
              >
                Compartir en Whatsapp <br /> <i className="ri-whatsapp-line" />
              </button>
            </a>
          </div>
        </div>
      );
    }
    return (
      <div>
        <div className="formUser" id="formUser">
          <div className="titleForm">
            <b className="green mediumSize">DANOS SÓLO 5 MINUTOS</b>
            <p className="smallSize">Siempre hay un siguiente nivel</p>
          </div>
          <form>
            <div className="form-group">
              <input
                type="text"
                name="name"
                value={this.state.name}
                onChange={this.changeInput}
                className="form-control"
                placeholder="Nombre y Apellido"
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                value={this.state.email}
                onChange={this.changeInput}
                className="form-control"
                placeholder="Correo Electrónico"
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="phone"
                value={this.state.phone}
                onChange={this.changeInput}
                className="form-control"
                onKeyDown={this.phoneVer}
                placeholder="Teléfono"
                ref={this.emailInput}
              />
            </div>

            <div className="form-group">
              <select
                className="form-control"
                id="exampleFormControlSelect1"
                name="career"
                value={this.state.career}
                onChange={this.changeInput}
                required
              >
                <option>Elige tu carrera</option>
                <option value="Ingeniería en Informática">
                  Ingeniería en Informática
                </option>
                <option value="Técnico en Programación y Análisis de Sistemas">
                  Técnico en Programación y Análisis de Sistemas
                </option>
                <option value="Admisión Especial a Ingeniería en Informática">
                  Admisión Especial a Ingeniería en Informática
                </option>
                <option value="Ingeniería en Conectividad y Redes">
                  Ingeniería en Conectividad y Redes
                </option>
                <option value="Técnico en Conectividad y Redes">
                  Técnico en Conectividad y Redes
                </option>
                <option value="Admisión Especial a Ingeniería en Conectividad y Redes">
                  Admisión Especial a Ingeniería en Conectividad y Redes
                </option>
                <option value="Ingeniería en Ciberseguridad">
                  Ingeniería en Ciberseguridad
                </option>
                <option value="Técnico en Ciberseguridad">
                  Técnico en Ciberseguridad
                </option>
                <option value="Admisión Especial a Ingeniería en Ciberseguridad">
                  Admisión Especial a Ingeniería en Ciberseguridad
                </option>
                <option value="Ingeniería en Automatización y Control Industrial">
                  Ingeniería en Automatización y Control Industrial
                </option>
                <option value="Técnico en Automatización y Control Industrial">
                  Técnico en Automatización y Control Industrial
                </option>
                <option value="Técnico en Control Industrial">
                  Técnico en Control Industrial
                </option>
                <option value="Admisión Especial a Ingeniería en Automatización y Control Industrial">
                  Admisión Especial a Ingeniería en Automatización y Control
                  Industrial
                </option>
              </select>
            </div>
            <button
              type="button"
              className="btn btn-success form-control btn-lg"
              onClick={this.sendData}
            >
              Mayor Información »
            </button>
          </form>
          <div className="termsncond">
            <input type="checkbox" />
            <p className="sizeTerms">
              Acepto el{" "}
              <a onClick={this.openPriv} href="...">
                Aviso de privacidad
              </a>{" "}
              y{" "}
              <a onClick={this.openTerms} href="...">
                Términos y Condiciones
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default FormUser;
