import CardHome from "../../components/index/CardHome/CardHome";
import CarouselHome from "../../components/index/CarouselHome/CarouselHome";


import home from "./styles/home.module.css"

export default function Home() {
  return (
    <section className={home.container}>
      <div className={home.card}>
        <CardHome title="Bienvenido" isDocument={false} description={"En NeuroFit insertar descripcion de la pagina para bienvenida"} image={undefined} path={"/login"}/>
      </div>
      <div className={home.carousel_container}>
      <CarouselHome />
      </div>

      </section>
      
  )
}
