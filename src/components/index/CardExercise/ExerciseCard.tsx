import React from 'react';
import { Card } from 'antd';
import ExerciseModal from './ExerciseModal';

const { Meta } = Card;

const ExerciseCard: React.FC = () => (
  <Card
    hoverable
    style={{ width: 240 }}
    cover={<img alt="example" src="https://ortoprono.es/wp-content/uploads/2022/01/tipos-de-ejercicios-terapeuticos.jpg" />}
  >
    <Meta title="Ejercicio 1" description="Ayuda" />
    <ExerciseModal />
  </Card>
);

export default ExerciseCard;