import { Button } from "antd";
import menuexercise from './styles/exercisemenu.module.css'
import { Link } from "react-router-dom";

export default function ExerciseMenu() {
  return (
    <section className={menuexercise.container_general}>
        <Link className={menuexercise.container_1} to={"/neuro/exercise/perfetti"}>
        <section >
            <Button className={menuexercise.bottom_1} type="primary">Ejercicios de Perfetti</Button>
        </section>
        </Link>
        <Link to={"/neuro/exercise/tronco"} className={menuexercise.container_2}>
        
        <section >
            <Button className={menuexercise.bottom_1} type="primary">Ejercicios de tronco</Button>

        </section>
        </Link>

    </section>
  )
}
