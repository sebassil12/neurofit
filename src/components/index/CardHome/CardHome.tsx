import { Button, Card } from "antd";
import { Link } from "react-router-dom";
interface HomeCard{
    image:string|undefined,
    title:string,
    isDocument:boolean,
    description:string|React.ReactNode,
    path:any,
    descriptionButton:string

}

export default function CardHome({image, title, description, isDocument, path, descriptionButton}:HomeCard) {
  return (
    <Card>
        <img src={image} width={50}/>
        <h1 >{title}</h1>
        <br />
        <p>{description}</p>
        <br/>
        { !isDocument ? <Link to={path}><Button type="primary">{descriptionButton}</Button></Link> 
        : null
        }
    </Card>
  )
}
