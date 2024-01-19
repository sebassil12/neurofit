import NeuroCardHome from "../../components/neuroApp/NeuroCardHome";
import { IMAGE_CAROUSEL } from "../../constants/constants";
import apphome from './styles/apphome.module.css'
export default function NeuroHome() {
  return (
    <section className={apphome.container}>
      <section>
        <NeuroCardHome title={"Plan de ejercicios"} description={"Ejercicios acorde a tus necesidades"} pathImage={IMAGE_CAROUSEL.fisio} pathLink={"/neuro/buy"} />
      </section>
      <section>
        <NeuroCardHome title={"Kit de entrenamiento"} description={"Encuentra todas las herramientas para tus ejercicios"} pathImage={IMAGE_CAROUSEL.old_man} pathLink={"/neuro/buy"} />
      </section>
    </section>
  )
}
