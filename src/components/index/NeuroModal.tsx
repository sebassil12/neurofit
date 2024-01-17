import React, { useState } from 'react';
import { Button, Modal } from 'antd';
import { Outlet } from 'react-router-dom';
import NeuroCollapse from './NeuroCollapse';

const NeuroModal: React.FC = () => {
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
        Comprar
      </Button>
      <Modal title="Formas de Pago" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <NeuroCollapse />
        <Outlet />
      </Modal>
    </>
  );
};

export default NeuroModal;