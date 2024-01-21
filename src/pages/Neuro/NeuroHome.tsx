import NeuroCardHome from "../../components/neuroApp/NeuroCardHome";
import { APP_HOME } from "../../constants/constants";
import apphome from './styles/apphome.module.css'
export default function NeuroHome() {
  return (
    <section className={apphome.container}>
      <section>
        <NeuroCardHome title={"Plan de ejercicios"} description={"Ejercicios acorde a tus necesidades"} pathImage={APP_HOME.ejercicio} pathLink={"/neuro/buy"} buttonText={'Conoce más'} />
      </section>
      <section>
        <NeuroCardHome title={"Kit de entrenamiento"} description={"Encuentra todas las herramientas para tus ejercicios"} pathImage={APP_HOME.kit} pathLink={"/neuro/buy"} buttonText={'Conoce más'} />
      </section>
    </section>
  )
}
