import { useContext } from "react";


import FormContext from "../../components/neuroApp/FormContext";
import { Button } from "antd";
import { Link } from "react-router-dom";
import ExerciseMenu from "../../components/neuroApp/ExerciseMenu";



export default function NeuroPlan1() {
    const {isFirstForm} = useContext(FormContext)
  return (
    <section>
        {isFirstForm ?(
            <div 
            style={{
              display:'flex',
              width:'80vw',
              height:'100vh',
              justifyContent:'center',
              alignItems:'center',
              flexDirection:'column'
            }}
            >
            <h1 style={{fontSize:'25px'}}>Aún no tienes planes, realiza el test y adquierelos</h1>
            
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
