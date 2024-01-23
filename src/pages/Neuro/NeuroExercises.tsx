import { Button } from "antd";

import { useContext } from "react";
import { Link } from "react-router-dom";
import FormContext from "../../components/neuroApp/FormContext";
import neuroexercises from './styles/neuroexercises.module.css'
import IsKitContext from "../../components/neuroApp/KitContext";

const style : React.CSSProperties ={
  display:'grid',
  gridTemplateRows:'repeat(2, 1fr)'
}

export default function NeuroExercises() {
  const {isFirstForm} = useContext(FormContext)
  const {isKit} = useContext(IsKitContext);
  let stylesContainer
  if (isKit) {
    stylesContainer = style
  }else{
    stylesContainer 
  }
  return (
    <section className={neuroexercises.container_general}>
      <div className={neuroexercises.container_1}>
      <Link to={"/neuro/exercise/form"}><Button type="primary" className={neuroexercises.bottom_1}>
        {isFirstForm ? <p>Realizar Test</p> : <p>Realizar test de nuevo</p>
        } 
        
        
        </Button></Link>
        </div>
        <div className={neuroexercises.container_2} style={stylesContainer}>
      <Link to={"/neuro/exercise/plan_1"}><Button type="primary" className={neuroexercises.bottom_1}>Ir a mi plan</Button></Link>
      {isKit ? (
        <Link to={"/neuro/kit"}><Button type="primary" className={neuroexercises.bottom_1}>Ir a mi kit</Button></Link>
      ):(
        null
      )

      }
      </div>

      
    
    </section>
  )
}
