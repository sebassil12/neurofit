import React from 'react';
import type { CollapseProps } from 'antd';
import { Collapse } from 'antd';
import NeuroDebit from './NeuroDebit';

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const items: CollapseProps['items'] = [
  {
    key: '1',
    label: 'Deposito',
    children: <NeuroDebit />,
  },
  {
    key: '2',
    label: 'Débito',
    children: <p>{text}</p>,
  },
  
];

const NeuroCollapse: React.FC = () => {
  const onChange = (key: string | string[]) => {
    console.log(key);
  };

  return <Collapse items={items} defaultActiveKey={['1']} onChange={onChange} />;
};

export default NeuroCollapse;