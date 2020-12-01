import { Component } from "react";
import FormUser from "./FormUser";

class Benefits extends Component {
  
  render() {
    return (
      <div>
        <div className="headSection benefits">
          <div className="headInfoBen">
            <h1 className="largeSize">
            ¡Estudia desde cualquier lugar!
            </h1>
            <div className="mediumSize">
              <p>Minimiza tus costos y tiempos de traslado</p>
            </div>
            <div className="smallSize infoBen">
              <p>CIISA cuenta con un <span className="green">
                Entorno Virtual de Aprendizaje,
              </span> <br className="brSt"/> interactivo y responsivo para realizar tus clases con el<br/> apoyo de docentes capacitados. </p>
            </div>
            <button type="button" className="btn btn-success btn-lg btnHome">Postula aquí »</button>
          </div>
          <FormUser/>
        </div>
        <div className="midd-bar mediumSize">
          <p>Profesionales que Lideran la Transformación Digital</p>
        </div>
        <div className="matrContent">
          <h2 className="mediumSize green headerMatr">¡En un mundo que cambió, entrénate en tecnología y evoluciona a lo digital! </h2>
          <ul className="smallSize listUl">
            <li>Matrícula Proceso 100% online</li>
            <li>Experiencia exitosa en educación online desde 2017</li>
            <li>Acceso a Biblioteca virtual y Contenido multimedia</li>
            <li>Metodología innovadora y apoyo tecnológico</li>
            <li>Desarrollo de actividades extraprogramáticas virtuales</li>
            <li>Certificaciones y Convenios con la Industria.</li>
            <li>Docentes que trabajan en el ecosistema tecnológico</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Benefits;
