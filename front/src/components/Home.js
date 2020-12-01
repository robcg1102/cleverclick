import { Component } from "react";
import FormUser from "./FormUser";

class Home extends Component {


  focusForm = () => {
    this.emailInput.current.focus();
  }

  render() {
    return (
      <div>
        <div className="headSection home">
          <div className="headInfo">
            <h1>
              ¡Estudia en CIISA una de nuestras carreras Online o Presencial!
            </h1>
            <p className="green mediumSize">
              (Modalidad Flex, contingencia Covid)
            </p>
            <p className="mediumSize">
              <b>Institución Acreditada: </b>
              <img
                src="https://res.cloudinary.com/robcg1102/image/upload/v1606585177/ciisa/acreditacion_jyaup0.png"
                alt="accreditation"
              />
            </p>
            <div className="smallSize alignCenter">
              <p>
                <i className="ri-arrow-up-s-fill arrowSize"></i>
              </p>
              <p>45 años de experiencia.</p>
            </div>
            <div className="smallSize alignCenter">
              <p>
                <i className="ri-arrow-up-s-fill arrowSize"></i>
              </p>
              <p>Docentes que trabajan en el mundo tecnológico</p>
            </div>
            <div className="smallSize alignCenter">
              <div>
                <p>
                  <i className="ri-arrow-up-s-fill arrowSize"></i>
                </p>
              </div>
              <p>Especialistas en educación tecnológica</p>
            </div>
            <button type="button" className="btn btn-success btn-lg btnHome" onClick={this.focusForm}>
              Postula aquí »
            </button>
          </div>

          <FormUser />
        </div>
        <div className="infoBar">
          <p className="cardInfo">
            Modalidades que se adaptan a tus necesidades{" "}
          </p>
          <p className="cardInfo">
            90% de empleabilidad dentro del 1er año de egreso*
          </p>
          <p className="cardInfo">+2.600 titulados que confiaron nosotros</p>
          <p className="cardInfo">
            Certificaciones y convenios con la industria
          </p>
        </div>
        <div className="midd-bar mediumSize">
          <p>Profesionales que Lideran la Transformación Digital</p>
        </div>
        <div>
          <h2 className="green mediumSize">Elige una de nuestras carreras</h2>
          <div className="boxCareer">
            <div className="cardCareer">
              <img
                src="https://res.cloudinary.com/robcg1102/image/upload/v1606585178/ciisa/c-1_i2siqg.png"
                alt="c-1"
              />
              <p className="titleCard">Ingeniería en Informática</p>
            </div>
            <div className="cardCareer">
              <img
                src="https://res.cloudinary.com/robcg1102/image/upload/v1606585178/ciisa/c-2_nlui7f.png"
                alt="c2"
              />
              <p className="titleCard">
                Técnico en Programación y Análisis de Sistemas
              </p>
            </div>
            <div className="cardCareer">
              <img
                src="https://res.cloudinary.com/robcg1102/image/upload/v1606585178/ciisa/c-3_psv1ra.png"
                alt="c-3"
              />
              <p className="titleCard">
                Admisión Especial a Ingeniería en Informática
              </p>
            </div>
            <div className="cardCareer">
              <img
                src="https://res.cloudinary.com/robcg1102/image/upload/v1606585179/ciisa/c-4_qfntkh.png"
                alt="c-4"
              />
              <p className="titleCard">Ingeniería en Conectividad y Redes</p>
            </div>
            <div className="cardCareer">
              <img
                src="https://res.cloudinary.com/robcg1102/image/upload/v1606585179/ciisa/c-5_u9lsbj.png"
                alt="c-5"
              />
              <p className="titleCard">Técnico en Conectividad y Redes</p>
            </div>
            <div className="cardCareer">
              <img
                src="https://res.cloudinary.com/robcg1102/image/upload/v1606585179/ciisa/c-6_dsg2la.png"
                alt="c-6"
              />
              <p className="titleCard">
                Admisión Especial a Ingeniería en Conectividad y Redes
              </p>
            </div>
            <div className="cardCareer">
              <img
                src="https://res.cloudinary.com/robcg1102/image/upload/v1606585179/ciisa/c-7_jxjjc9.png"
                alt="c-7"
              />
              <p className="titleCard">Ingeniería en Ciberseguridad</p>
            </div>
            <div className="cardCareer">
              <img
                src="https://res.cloudinary.com/robcg1102/image/upload/v1606585179/ciisa/c-8_mahg9z.png"
                alt="c-8"
              />
              <p className="titleCard">Técnico en Ciberseguridad</p>
            </div>
            <div className="cardCareer">
              <img
                src="https://res.cloudinary.com/robcg1102/image/upload/v1606585179/ciisa/c-9_cud6vs.png"
                alt="c-9"
              />
              <p className="titleCard">
                Admisión Especial a Ingeniería en Ciberseguridad{" "}
              </p>
            </div>
            <div className="cardCareer">
              <img
                src="https://res.cloudinary.com/robcg1102/image/upload/v1606585177/ciisa/c-10_v7jhle.png"
                alt="c-10"
              />
              <p className="titleCard">
                Técnico en Automatización y Control Industrial
              </p>
            </div>
            <div className="cardCareer">
              <img
                src="https://res.cloudinary.com/robcg1102/image/upload/v1606585178/ciisa/c-11_jap1vg.png"
                alt="c-11"
              />
              <p className="titleCard">Técnico en Control Industrial</p>
            </div>
            <div className="cardCareer">
              <img
                src="https://res.cloudinary.com/robcg1102/image/upload/v1606585178/ciisa/c-12_w4mskz.png"
                alt="c-12"
              />
              <p className="titleCard">
                Admisión Especial a Ingeniería en Automatización y Control
                Industrial{" "}
              </p>
            </div>
            <div className="cardCareer">
              <img
                src="https://res.cloudinary.com/robcg1102/image/upload/v1606585178/ciisa/c-13_wcchpg.png"
                alt="c-13"
              />
              <p className="titleCard">
                Ingeniería en Automatización y Control Industrial
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
