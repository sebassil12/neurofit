import React from 'react';
import { Button, Result } from 'antd';
import { Link } from 'react-router-dom';

const ConfirmPurchase: React.FC = () => (
  <Result
    status="success"
    title="Compra exitosa!"
    subTitle="Order number: 2017182818828182881"
    extra={[
      <Link to={"/neuro"}><Button type="primary" key="home">
          Ir a Inicio
      </Button></Link>,
      <Link to={"/neuro/exercise"}><Button key="exercise">Ir a Ejercicios</Button></Link>,
    ]}
  />
);

export default ConfirmPurchase;