import { Card, Col, Row } from 'antd';

import NeuroModal from './NeuroModal';

interface CardProps{
    title:string,
    item1:string,
    item2:string,
    item3:string,
    item4:string
}
function NeuroCard ({title, item1, item2, item3,item4}:CardProps){
   return( 
  <Row gutter={8}>
    <Col span={8}>
      <Card title={title} bordered={false}>
        <ul>
            <li>{item1}</li>
            <li>{item2}</li>
            <li>{item3}</li>
            <li>{item4}</li>
        </ul>
        <br />
        <NeuroModal />
      </Card>   
    </Col>
  </Row>
   )
};

export default NeuroCard;