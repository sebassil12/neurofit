import CardHome from "../index/CardHome/CardHome"
import neurohome from "./styles/neurohome.module.css"

interface NeuroHome{
  title:string,
  description:string,
  pathImage:string,
  pathLink:string
}

export default function NeuroCardHome({title, description, pathImage, pathLink}:NeuroHome) {
  return (
    <section>
      <section className={neurohome.container} style={{backgroundImage:`url(${pathImage})`}}>
        <div className={neurohome.card}>
        <CardHome image={undefined} title={title} isDocument={false} description={description} path={pathLink} />
        </div>
      </section>
    </section>
  )
}
