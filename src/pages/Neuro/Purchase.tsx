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
        title={"Plan Básico"}
          // maindescription={
          //   <>
          //     <h4>PRESENCIAL/ONLINE</h4>
          //     <h6>Conviértelo a básico plus ambas pláticas por $8500</h6>
          //   </>
          // }
        pathImage={NUMBERS.one}
        description={
          <>
            <ul>
              <li>Plan Fisioterapéutico basado en FITT</li>
            
            
              <li>Acceso Indefinido</li>
            </ul>
          </>
        }
        
        price={"$75"}

        />
      </section>
      <section>
        <NeuroCard pathImage={NUMBERS.two}  
        // maindescription={
        //   <>
        //   <h4>ONLINE</h4>
        //   <h6>Fisio y Nutri en conjunto</h6>
        //   </>
        // } 
        description={
          <>
          <h4>INCLUYE</h4> 
          <ul>
            <li>2 balones medianos</li>
            <li>2 balones pequeños</li>
            <li>Tabla de texturas</li>
            <li>6 conos de colores</li>
          </ul>
          </>
        }
        title={"Fisio KIT"}  price={"$40"} />

      </section>
      <section>
        <NeuroCard pathImage={NUMBERS.three}  
        // maindescription={
        //   <>
        //     <h4>POR UN AÑO</h4>
        //     <h6>Personalizado</h6>
        //   </>

        // }
         description={
          <>
            <h4>INCLUYE</h4>
            <ul>
              <li>Plan Fisioterapeútico basado en FITT</li>
              <li>Acceso indefinido</li>
              <li>Fisio KIT</li>
            </ul>
          </>
        }title={"FIIT KIT"} price={"$100"} />
      </section>
      </section>
    </section>
  );
}
