import { Component } from "react";

class FooterComponent extends Component {
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

  render() {
    return (
      <div>
        <div className="plans">
          <p className="mediumSize infoPlans">
            Planes formativos con niveles de certificación progresiva.
          </p>
          <div className="boxPlans">
            <div className="cardPlans">
              <img
                src="https://res.cloudinary.com/robcg1102/image/upload/v1606585179/ciisa/ch-1_sw9zyp.svg"
                alt="ch-1"
              />
              <p className="largeSize">
                <b>90%</b>
              </p>
              <p className="smallSize">
                de empleabilidad dentro del primer año de egreso*
              </p>
            </div>
            <div className="cardPlans">
              <img
                src="https://res.cloudinary.com/robcg1102/image/upload/v1606585180/ciisa/ch-2_demgmf.svg"
                alt="ch-2"
              />
              <p className="largeSize">
                <b>45</b>
              </p>
              <p className="smallSize">
                Años de trayectoria en educación tecnológica
              </p>
            </div>
            <div className="cardPlans">
              <img
                src="https://res.cloudinary.com/robcg1102/image/upload/v1606585180/ciisa/ch-3_etmshr.svg"
                alt="ch-3"
              />
              <p className="largeSize">
                <b>Experiencia</b>
              </p>
              <p className="smallSize">
                Experiencia exitosa en educación online desde el 2017{" "}
              </p>
            </div>
            <div className="cardPlans">
              <img
                src="https://res.cloudinary.com/robcg1102/image/upload/v1606585179/ciisa/ch-1_sw9zyp.svg"
                alt="ch-1"
              />
              <p className="largeSize">
                <b>+2.600</b>
              </p>
              <p className="smallSize">Titulados confiaron en nosotros </p>
            </div>
          </div>
          <div className="middBarG">
            <button type="button" className="btn btn-light btn-lg btnmidd">
              Más información »
            </button>
          </div>
          <div className="footSection">
            <img
              src="https://res.cloudinary.com/robcg1102/image/upload/v1606585177/ciisa/acreditacion_jyaup0.png"
              alt="ciisa-logo"
            />
            <section>
              <p>*Fuente de los datos: mifuturo.cl</p>
                <p>
                  ©2020 Derechos Reservados - CIISA{" "}
                  <a onClick={this.openTerms} href="...">
                    Términos de uso
                  </a> {" "}|{" "}
                  <a onClick={this.openPriv} href="...">
                    Aviso de privacidad
                  </a>
                </p>
            </section>
          </div>
        </div>
      </div>
    );
  }
}

export default FooterComponent;
