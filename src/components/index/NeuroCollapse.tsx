import React from 'react';
import type { CollapseProps } from 'antd';
import { Collapse } from 'antd';

import Debit from '../../pages/Neuro/Debit';
import DepositoForm from '../neuroApp/DepositoForm';



const items: CollapseProps['items'] = [
  {
    key: '1',
    label: 'Débito',
    children: <Debit />
  },
  {
    key: '2',
    label: 'Deposito',
    children: <DepositoForm />
  },
  
];

const NeuroCollapse: React.FC = () => {
  const onChange = (key: string | string[]) => {
    console.log(key);
  };

  return <Collapse items={items} defaultActiveKey={['1']} onChange={onChange} />;
};

export default NeuroCollapse;