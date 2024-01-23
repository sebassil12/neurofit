import { Button } from "antd";

import { useContext } from "react";
import { Link } from "react-router-dom";
import FormContext from "../../components/neuroApp/FormContext";
import neuroexercises from './styles/neuroexercises.module.css'



export default function NeuroExercises() {
  const {isFirstForm} = useContext(FormContext)
  return (
    <section className={neuroexercises.container_general}>
      <div className={neuroexercises.container_1}>
      <Link to={"/neuro/exercise/form"}><Button type="primary" className={neuroexercises.bottom_1}>
        {isFirstForm ? <p>Realizar Test</p> : <p>Realizar test de nuevo</p>
        } 
        
        
        </Button></Link>
        </div>
        <div className={neuroexercises.container_2}>
      <Link to={"/neuro/exercise/plan_1"}><Button type="primary" className={neuroexercises.bottom_1}>Ir a mi plan</Button></Link>
      </div>
    
    </section>
  )
}
