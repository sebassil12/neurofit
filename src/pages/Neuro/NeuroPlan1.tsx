import { useContext } from "react";
import ChargeCard from "../../components/index/CardExercise/ChargeCard";
import ExerciseCard from "../../components/index/CardExercise/ExerciseCard";
import FormContext from "../../components/neuroApp/FormContext";
import { Button } from "antd";
import { Link } from "react-router-dom";



export default function NeuroPlan1() {
    const {isFirstForm} = useContext(FormContext)
  return (
    <section>
        {isFirstForm ?(
            <div>
            <h1>Aún no tienes planes, realiza el test y adquierelos</h1>
            <Link to={"/neuro/exercise"}><Button type="primary">Volver</Button></Link>
            </div>
        ):(
        <section>
        <ExerciseCard />
        <ChargeCard />
        </section>
        )}
    
    </section>
  )
}
