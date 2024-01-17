import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import React, { useContext} from 'react';
import { Avatar, Card, } from 'antd';
import DebitContext from '../../neuroApp/DebitContext';
import WarningForPurchase from './WarningForPurchase';

const { Meta } = Card;

const ChargeCard: React.FC = () => {
    const {isPurchase} = useContext(DebitContext)

  
  return (
    <>
      
      <Card style={{ width: 300, marginTop: 16 }} loading={!isPurchase}>
        <Meta
          avatar={<Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=1" />}
          title="Card title"
          description="This is the description"
        />
      </Card>
      <Card
        style={{ width: 300, marginTop: 16 }}
        actions={[
          <SettingOutlined key="setting" />,
          <EditOutlined key="edit" />,
          <EllipsisOutlined key="ellipsis" />,
        ]}
      >
       
      </Card>
      {!isPurchase?(
        <WarningForPurchase />
        )   :(
            null
        )       

    }
    </>
  );
};

export default ChargeCard;