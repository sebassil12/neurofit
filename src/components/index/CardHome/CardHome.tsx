import { Button } from "antd";
import { Link } from "react-router-dom";


export default function CardHome() {
  return (
    <section>
        <h1>¡Bienvenido!</h1>
        <br />
        <p>En NeuroFit nos preocupamos por tu salud. Compra hoy mismo </p>
        <br/>
        <Link to={"/login"}><Button type="primary">Descubre más</Button></Link>

    </section>
  )
}
