import { Button } from "antd";

import { useContext } from "react";
import { Link } from "react-router-dom";
import FormContext from "../../components/neuroApp/FormContext";




export default function NeuroExercises() {
  const {isFirstForm} = useContext(FormContext)
  return (
    <section style={{display:'grid', gridTemplateColumns:'repeat(2, 1fr)'}}>
      <Link to={"/neuro/exercise/form"}><Button type="primary">
        {isFirstForm ? <p>Realizar Test</p> : <p>Realizar test de nuevo</p>
        } 
        
        
        </Button></Link>
      <Link to={"/neuro/exercise/plan_1"}><Button type="primary">Ir a mi plan</Button></Link>
    </section>
  )
}
