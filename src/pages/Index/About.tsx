import { Card } from "antd";
import about from "./styles/about.module.css";
import { IMAGEABOUT } from "../../constants/constants";

export default function About() {
  return (
    <section className={about.container}>
      
      <Card className={about.card}> 
        <h1 className={about.title}>Nosotros...</h1>
        <p className={about.text}>Somos estudiantes de la carrera de Fisioterapia fundadores de NeuroFITT
        una página web que ofrece tratamiento fisioterapéutico basado en
        ejercicio terapéutico, para personas adultas con enfermedades
        neurológicas de tipo central, porque se ha visto una deficiencia o
        alteración en la calidad de vida de estas personas. 
        <br/>
        <br/>
        Esto empezó debido a
        que de acuerdo a los indicadores básicos de salud, entre las primeras
        sesenta causas de defunción en el Ecuador se encuentran cuatro
        patologías neurológicas: la enfermedad cerebro vascular, la epilepsia,
        la enfermedad de Parkinson y la enfermedad de Alzheimer.
        </p>
      </Card>
      <section>
        <img src={IMAGEABOUT.about} width={'100%'} style={{opacity:0.6}}/>
      </section>
    </section>
  );
}
