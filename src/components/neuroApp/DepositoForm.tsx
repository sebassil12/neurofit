import { InboxOutlined } from '@ant-design/icons';
import { useContext } from 'react';
import {
  Button,

  Form,
  InputNumber,

  Select,

  Space,

  Upload,
  Input
} from 'antd';
import { useNavigate } from 'react-router-dom';
import DebitContext from './DebitContext';

const { Option } = Select;

const formItemLayout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 14 },
};

const normFile = (e: any) => {
  console.log('Upload event:', e);
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};


export function DepositoForm() {
  const {setIsPurchase} = useContext(DebitContext);

  const purchaseNavigate = useNavigate();
  const onFinish = async() => {
      setIsPurchase(true);
      purchaseNavigate("/neuro/verification")
  
     
  };
  return(
  <Form
    name="validate_other"
    {...formItemLayout}
    onFinish={onFinish}

    style={{ maxWidth: 600 }}
  >
  <Form.Item
        name="Número Documento"
        label="Documento"
        rules={[{ required: true, message: 'Ingrese el documento' }]}
      >
        <Input placeholder="Número de documento" />
      </Form.Item>
    <Form.Item
      name="select"
      label="Banco"
      hasFeedback
      rules={[{ required: true, message: 'Seleccione el banco' }]}
    >
      <Select placeholder="Seleccione el banco">
        <Option value="china">Banco Pichincha</Option>
        <Option value="usa">Banco Pacífico</Option>
      </Select>
    </Form.Item>


    <Form.Item label="Cantidad">
      <Form.Item name="input-number" 
      rules={[{ required: true, message: 'Ingrese la cantidad' }]}
      noStyle>
        <InputNumber min={1} max={200} />
      </Form.Item>
      <span className="ant-form-text" style={{ marginLeft: 8 }}>
        dólares
      </span>
    </Form.Item>

    <Form.Item label="Evidencia">
      <Form.Item name="dragger" valuePropName="fileList" getValueFromEvent={normFile} noStyle>
        <Upload.Dragger name="files" action="/upload.do">
          <p className="ant-upload-drag-icon">
            <InboxOutlined />
          </p>
          <p className="ant-upload-text">Haga click o arrastre la evidencia </p>
          <p className="ant-upload-hint">Soporta formato pdf, png, jpg</p>
        </Upload.Dragger>
      </Form.Item>
    </Form.Item>
    <Form.Item wrapperCol={{ span: 12, offset: 6 }}>
      <Space>
        <Button type="primary" htmlType="submit">
          Enviar
        </Button>
        
      </Space>
    </Form.Item>
  </Form>
  )
};

export default DepositoForm;