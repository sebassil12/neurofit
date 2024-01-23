import React from 'react';
import { Card } from 'antd';
import ExerciseModal from './ExerciseModal';

const { Meta } = Card;

interface ExerciseCardProps{
  title:React.ReactNode,
  pathImage:string|undefined,
  onepart:string|undefined,
  titleone:string|null,
  twopart:string|null,
  titletwo:string|null,
  threepart:string|null,
  titlethree:string|null
}
export default function ExerciseCard ({title,pathImage, titleone,titletwo,titlethree,onepart,twopart,threepart}:ExerciseCardProps) {
  return(
    <Card
      hoverable
      style={{ width: 200 }}
      cover={<img height={200} src={pathImage}/>}
    >
      <Meta title={title} />
      <br/>
      <ExerciseModal onepart={onepart} titleone={titleone} twopart={twopart} titletwo={titletwo} threepart={threepart} titlethree={titlethree} />
    </Card>


  )
}


