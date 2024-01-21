import React from 'react';
import { Button, Form, Input, Select, Space } from 'antd';
import { Link } from 'react-router-dom';

const { Option } = Select;

const onFinish = (values: any) => {
  console.log('Received values of form: ', values);
};

const RegisterNeuroForm: React.FC = () => (
  <Form
    name="complex-form"
    onFinish={onFinish}
    labelCol={{ span: 8 }}
    wrapperCol={{ span: 16 }}
    style={{ maxWidth: 600 }}
  >
    <div style={{marginLeft:'20%'}}>
    <h1 style={{width:'100%'}}>Regístrate en NeuroFITT</h1>
    <Form.Item>
        ¿Ya tienes una cuenta? <Link to={"/login"}>Inicia sesión!</Link>
    </Form.Item>
    </div>
    <Form.Item label="Usuario">
      <Space>
        <Form.Item
          name="username"
          noStyle
          rules={[{ required: true, message: 'Usuario es requerido' }]}
        >
          <Input style={{ width: 160 }} placeholder="Please input" />
        </Form.Item>
      </Space>
    </Form.Item>
    <Form.Item label="Contraseña">
      <Space>
        <Form.Item
          name="password"
          noStyle
          
          rules={[{ required: true, message: 'Contraseña es requerida' }]}
        >
          <Input style={{ width: 160 }} placeholder="Please input" type='password' />
        </Form.Item>
      </Space>
    </Form.Item>
    <Form.Item label="Address">
      <Space.Compact>
        <Form.Item
          name={['address', 'province']}
          noStyle
          rules={[{ required: true, message: 'Province is required' }]}
        >
          <Select placeholder="Provincia">
            <Option value="Zhejiang">Azuay</Option>
            <Option value="Jiangsu">Loja</Option>
          </Select>
        </Form.Item>
        <Form.Item
          name={['address', 'street']}
          noStyle
          rules={[{ required: true, message: 'Street is required' }]}
        >
          <Input style={{ width: '50%' }} placeholder="Ciudad" />
        </Form.Item>
      </Space.Compact>
    </Form.Item>
    <Form.Item label="Edad" style={{ marginBottom: 0 }}>
      <Form.Item
        name="year"
        rules={[{ required: true }]}
        style={{ display: 'inline-block', width: 'calc(50% - 8px)' }}
      >
        <Input placeholder="Edad" />
      </Form.Item>
      
    </Form.Item>
    <Form.Item label=" " colon={false}>
    <Link to={"/login"}>
    
      <Button type="primary" htmlType="submit">
        Registrarme
      </Button>
    </Link>
    </Form.Item>
  </Form>
);

export default RegisterNeuroForm;