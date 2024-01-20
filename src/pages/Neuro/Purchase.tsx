import NeuroCard from "../../components/index/NeuroCard";
import { LOGO, NUMBERS } from "../../constants/constants";
import purchase from './styles/purchase.module.css'
export default function Purchase() {
  return (
    <section >
      <section className={purchase.title_page}>
        <img src={LOGO.second} width={250} style={{marginLeft:'2%'}}/>
        <div className={purchase.title_container}>
        <h1 className={purchase.title}>Paquetes</h1>
        <h3 className={purchase.description_title}>Neuro Fitness Center</h3>
        </div>
      </section>
      <section className={purchase.plan_container}>
      <section>

      <NeuroCard 
        title={"Básico"}
        maindescription={
          <>
            <h4>PRESENCIAL/ONLINE</h4>
            <h6>Conviértelo a básico plus ambas pláticas por $8500</h6>
          </>
        }
        pathImage={NUMBERS.one}
        description={
          <>
            <h4>BÁSICO FISIO</h4>
            <ul>
              <li>Plática de temas fundamentales de fisioterapia</li>
            </ul>
            <h4>BÁSICO NUTRI</h4>
            <ul>
              <li>Plática de temas fundamentales de nutrición</li>
            </ul>
          </>
        }
        sizegroup={"10-30 personas "}
        price={"$4500"}

        />
      </section>
      <section>
        <NeuroCard pathImage={NUMBERS.two}  maindescription={
          <>
          <h4>ONLINE</h4>
          <h6>Fisio y Nutri en conjunto</h6>
          </>
        } 
        description={
          <>
          <h4>INCLUYE</h4> 
          <ul>
            <li>2 pláticas de fisioterapia y nutrición</li>
            <li>1 sesión stretching + mindfuliness (30 min)</li>
            <li>1 sesión funcional (30 min)</li>
            <li>1 sesión nutri - grupos de alimentos (30 min)</li>
          </ul>
          </>
        }
        title={"Nutri-Fisio"} sizegroup={"5-50 personas"} price={"$10 500"} />

      </section>
      <section>
        <NeuroCard pathImage={NUMBERS.three}  maindescription={
          <>
            <h4>POR UN AÑO</h4>
            <h6>Personalizado</h6>
          </>

        } description={
          <>
            <h4>INCLUYE</h4>
            <ul>
              <li>49 semanas</li>
              <li>1 sesión semanal, las sesiones son personalizadas</li>
              <li>Opciones: Baile, Stretching, Nutrición, Mindfuliness</li>
            </ul>
          </>
        }title={"Programa Plus"} sizegroup={"5-20 personas"} price={"$49 000"} />
      </section>
      </section>
    </section>
  );
}
