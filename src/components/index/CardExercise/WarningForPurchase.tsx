import React from 'react';
import { Button, Result } from 'antd';
import { Link } from 'react-router-dom';

const WarningForPurchase: React.FC = () => (
  <Result
    status="warning"
    title="Adquiere tu plan completo"
    extra={
      <Button type="primary" key="console">
        <Link to={"/neuro/buy"}>Comprar</Link>
      </Button>
    }
  />
);

export default WarningForPurchase;