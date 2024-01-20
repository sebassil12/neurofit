import CardHome from "../../components/index/CardHome/CardHome";
import about from './styles/about.module.css'

export default function About() {
  return (
    <section className={about.container}>
      <section className={about.card}>
      <CardHome image={undefined} title={"Persona 1"} isDocument={true} description={"Add description of yourself"} path={undefined} descriptionButton={""} />
      </section>
      <section className={about.card}>
      <CardHome image={undefined} title={"Persona 2"} isDocument={true} description={"Add description of yourself"} path={undefined} descriptionButton={""} />
      </section>

    </section>
  )
}
