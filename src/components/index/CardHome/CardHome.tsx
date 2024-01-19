import { Button, Card } from "antd";
import { Link } from "react-router-dom";
interface HomeCard{
    image:string|undefined,
    title:string,
    isDocument:boolean,
    description:string,
    path:any

}

export default function CardHome({image, title, description, isDocument, path}:HomeCard) {
  return (
    <Card>
        <img src={image}/>
        <h1 >{title}</h1>
        <br />
        <p>{description}</p>
        <br/>
        { !isDocument ? <Link to={path}><Button type="primary">Descubre más</Button></Link> 
        : null
        }
    </Card>
  )
}
