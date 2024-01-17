import React, { useState } from 'react';
import { Button, Modal } from 'antd';

const ExerciseModal: React.FC = () => {
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
      <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <div
        style={{
            display:"grid",
            gridTemplateColumns:"repeat(2, 1fr)",            
        }}
        >
            <section>
                info de ejercicio
            </section>
            <section>
                Video
            </section>
        </div>
      </Modal>
    </>
  );
};

export default ExerciseModal;