import { Avatar, Card, Col, Row } from 'antd';
import React from 'react';
import NeuroModal from './NeuroModal';
import Meta from 'antd/es/card/Meta';


interface CardProps{
    pathImage:string,
    description:React.ReactNode,
    title:string,
    sizegroup:string,
    price:string
    
}
function NeuroCard ({title, pathImage, description, sizegroup, price}:CardProps){
   return( 
  <Row gutter={0}>
    <Col span={24}>
      <Card>
        <div style={{display:'flex', height:'60px'}}>
        <Meta 
          avatar={<Avatar src={pathImage} style={{marginTop:'10%'}}/>}
        />
        <h1 style={{fontSize:'20px'}}>{title}</h1>
        </div>
        
        <Card >

        {description}
        </Card>
        <Card>
          <h4>GRUPO</h4>
          <p>{sizegroup}</p>
          <p>{price}</p>
          <p><strong>PRECIO + IVA</strong></p>
        </Card>
        <br />
        <NeuroModal />
      </Card>   
    </Col>
  </Row>
   )
};

export default NeuroCard;