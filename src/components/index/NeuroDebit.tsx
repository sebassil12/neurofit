import { Button, Form, Input, Space } from 'antd';
import { useContext } from 'react';
import DebitContext from '../neuroApp/DebitContext';
import { useNavigate } from 'react-router-dom';




export default function NeuroDebit(){

const {setIsPurchase} = useContext(DebitContext);

const purchaseNavigate = useNavigate();
const onFinish = async(values: any) => {
    console.log('Received values of form: ', values);
    setIsPurchase(true);
    purchaseNavigate("/neuro/verification")

   
};


return(
  <Form
    name="complex-form"
    onFinish={onFinish}
    labelCol={{ span: 8 }}
    wrapperCol={{ span: 16 }}
    style={{ maxWidth: 600 }}
  >
    <Form.Item label="Número de tarjeta">
      <Space>
        <Form.Item
          name="numbertarjeta"
          noStyle
          rules={[{ required: true, message: 'Este campo es requerido' }]}
        >
          <Input style={{ width: 160 }} placeholder="Número" />
        </Form.Item>
    
      </Space>
    </Form.Item>
    <Form.Item label="Nombre del titular">
      <Space>
        <Form.Item
          name="titular"
          noStyle
          rules={[{ required: true, message: 'Este campo es requerido' }]}
        >
          <Input style={{ width: 160 }} placeholder="Titular" />
        </Form.Item>
    
      </Space>
    </Form.Item>
 
  <Form.Item label="Vencimiento" style={{ marginBottom: 0 }}>
      <Form.Item
        name="year"
        rules={[{ required: true }]}
        style={{ display: 'inline-block', width: 'calc(50% - 8px)' }}
      >
        <Input placeholder="Ingrese el mes" />
      </Form.Item>
      <Form.Item
        name="month"
        rules={[{ required: true }]}
        style={{ display: 'inline-block', width: 'calc(50% - 8px)', margin: '0 8px' }}
      >
        <Input placeholder="Ingrese el año" />
      </Form.Item>

      <Form.Item label="CVV">
      <Space>
        <Form.Item
          name="CVV"
          noStyle
          rules={[{ required: true, message: 'Este campo es requerido' }]}
        >
          <Input style={{ width: 160 }} placeholder="CVV" />
        </Form.Item>
    
      </Space>
    </Form.Item>
    </Form.Item>
    <Form.Item label=" " colon={false}>
      <Button type="primary" htmlType="submit">
        Realizar pago
      </Button>
    </Form.Item>
  </Form>
)};

