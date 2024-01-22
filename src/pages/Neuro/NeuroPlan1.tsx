import { useContext } from "react";


import FormContext from "../../components/neuroApp/FormContext";
import { Button } from "antd";
import { Link } from "react-router-dom";
import ExerciseMenu from "../../components/neuroApp/ExerciseMenu";



export default function NeuroPlan1() {
    const {isFirstForm} = useContext(FormContext)
  return (
    <section>
        {false ?(
            <div>
            <h1>Aún no tienes planes, realiza el test y adquierelos</h1>
            <Link to={"/neuro/exercise"}><Button type="primary">Volver</Button></Link>
            </div>
        ):(
        <section>

          <ExerciseMenu />
        {/* <ExerciseCard />
        <ChargeCard /> */}
        </section>
        )}
    
    </section>
  )
}
