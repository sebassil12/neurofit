import CardHome from "../../components/index/CardHome/CardHome";
import CarouselHome from "../../components/index/CarouselHome/CarouselHome";
import NeuroCard from "../../components/index/NeuroCard";
import home from "./styles/home.module.css"

export default function Home() {
  return (
    <section className={home.container}>
      <div>
        <CardHome />
      </div>
      <div className={home.carousel_container}>
      <CarouselHome />
      </div>
      </section>
      
  )
}
