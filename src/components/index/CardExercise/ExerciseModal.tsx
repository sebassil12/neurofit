import { useState } from "react";
import { Button, Modal } from "antd";
import type { CollapseProps } from 'antd';
import { Collapse } from 'antd';
interface ModalProps{
  onepart:string|undefined, 
  titleone:string|null,
  twopart:string|null,
  titletwo:string|null,
  threepart:string|null,
  titlethree:string|null
}
export default function ExerciseModal({titleone,onepart,titletwo, twopart, titlethree,threepart}:ModalProps) {
  const items: CollapseProps['items'] = [
    {
      key: '1',
      label: <h4>{titleone}</h4>,
      children: <p>{onepart}</p>,
    },
    {
      key: '2',
      label: <h4>{titletwo}</h4>,
      children: <p>{twopart}</p>,
    },
    {
      key: '3',
      label: <h4>{titlethree}</h4>,
      children: <p>{threepart}</p>,
    },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Información
      </Button>
      <Modal
        title="Pasos"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <div
  
        >
          <Collapse items={items} defaultActiveKey={['1']} />
        </div>
      </Modal>
    </>
  );
};


