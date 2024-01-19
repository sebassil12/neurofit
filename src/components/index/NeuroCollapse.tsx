import React from 'react';
import type { CollapseProps } from 'antd';
import { Collapse } from 'antd';

import Debit from '../../pages/Neuro/Debit';

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

const items: CollapseProps['items'] = [
  {
    key: '1',
    label: 'Débito',
    children: <Debit />
  },
  {
    key: '2',
    label: 'Deposito',
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