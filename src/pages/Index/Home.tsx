import CardHome from "../../components/index/CardHome/CardHome";
import CarouselHome from "../../components/index/CarouselHome/CarouselHome";


import home from "./styles/home.module.css"

export default function Home() {
  return (
    <section className={home.container}>
      <div className={home.card}>
        <CardHome title="Bienvenido" isDocument={false} description={<p>En NeuroFITT nos preocupamos por tu salud. <br />Tratamiento neurológico de calidad.</p>} image={undefined} path={"/login"} descriptionButton={"Descubre más"}/>
      </div>
      <div className={home.carousel_container}>
      <CarouselHome />
      </div>

      </section>
      
  )
}
