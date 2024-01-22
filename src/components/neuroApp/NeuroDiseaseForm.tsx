
import {
  Button,
  Form,
  Input,
  InputNumber,
  Select,
} from 'antd';
import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import FormContext from './FormContext';
const { Option } = Select; 
{/*Esta historia clinica la esta llenando:Paciente o Cuidador
Nombre
Edad
Tiempo de patologia
Puede manetenerse solo
de pie solo
Tiene ayuda tecnia (andador, muletas, bastos, silla de ruedas)
Tiene antecedentes(Diabetes, hipertension arterial, hipertiroidismo, hipo, hipocolesterolemia, etc) 
Cirugia reciente Cual
Sonda vesical
*/}
const formItemLayout = {
  labelCol: {
    xs: { span: 26 },
    sm: { span: 14 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 14 },
  },
};

export default function NeuroDiseaseForm(){
    const {setIsFirstForm} = useContext(FormContext)
    const navigate = useNavigate();
    const onFinish =()=>{
        navigate("/neuro/exercise/plan_1")
        setIsFirstForm(false);
    }

return(
  
  <Form {...formItemLayout} variant="filled" style={{ maxWidth: 1050 }} onFinish={onFinish}>
    <br />
    <h1 style={{textAlign:'center'}}>Historia Clínica NeuroFITT</h1>
    <br/>
  <section style={{display:'grid', gridTemplateColumns:'repeat(2, 1fr)'}}>

    <Form.Item label="¿Quién está llenando?" name="Select" rules={[{ required: false, message: 'Ingrese datos' }]}>
      <Select >
      <Option value="china">Paciente</Option>
        <Option value="usa">Cuidador</Option>
      </Select>
    </Form.Item>

    <Form.Item label="Nombre" name="Name" rules={[{ required: false, message: 'Ingrese datos' }]}>
      <Input />
    </Form.Item>

    <Form.Item label="Edad" name="Age" rules={[{ required: false, message: 'Ingrese datos' }]}>
      <Input />
    </Form.Item>

    <Form.Item label="Tiempo de patología" style={{ marginBottom: 0 }}>
      <Form.Item
        name="time-patology"
        rules={[{ required: true, message:'Ingrese' }]}
        style={{ display: 'inline-block', width: 'calc(50% - 8px)' }}
      >
        <InputNumber placeholder='Tiempo'/>
      </Form.Item>
      <Form.Item
        name="time"
        rules={[{ required: true, message:'Ingrese ' }]}
        style={{ display: 'inline-block', width: 'calc(50% - 8px)', margin: '0 8px' }}
      >
        <Select style={{width:'100%'}}>
      <Option value="china">Días</Option>
        <Option value="usa">Meses</Option>
        <Option value="usa">Años</Option>
      </Select>
      </Form.Item>
    </Form.Item>

    <Form.Item label="¿Se puede mantener sentado?" name="Sit" rules={[{ required: true, message: 'Ingrese datos' }]}>
      <Select style={{width:'50%'}}>
      <Option value="china">Si</Option>
        <Option value="usa">No</Option>
      </Select>
    </Form.Item>

    <Form.Item label="¿Se puede mantener de pie?" name="Stand" rules={[{ required: true, message: 'Ingrese datos' }]}>
      <Select style={{width:'50%'}}>
      <Option value="china">Si</Option>
        <Option value="usa">No</Option>
      </Select>
    </Form.Item>

    <Form.Item
      label="¿Tiene ayuda técnica?"
      name="TextArea"
      
      rules={[{ required: true, message: 'Ingrese datos' }]}
    >
      <Input.TextArea placeholder='Andador, muletas, bastón, silla de ruedas' />
    </Form.Item>

    <Form.Item
      label="¿Tiene antecedentes?"
      name="Antecedentes"
      
      rules={[{ required: false , message: 'Ingrese datos' }]}
    >
      <Input.TextArea placeholder='Diabetes, hipertensión arterial, hipertiroidismo, hipotiroidismo, hipocolesterolemia, entre otros' />
    </Form.Item>
   

    <Form.Item label="¿Tiene cirugía reciente?" name="cirugia" rules={[{ required: false, message: 'Ingrese datos' }]}>
      <Select style={{width:'40%'}}>
      <Option value="china">Si</Option>
        <Option value="usa">No</Option>
      </Select>
      <Input.TextArea style={{width:'40%'}} placeholder='¿Cuál?' />
    </Form.Item>

    <Form.Item label="¿Poseé sonda vesical?" name="Sonda" rules={[{ required: true, message: 'Ingrese datos' }]}>
      <Select style={{width:'50%'}}>
      <Option value="china">Si</Option>
        <Option value="usa">No</Option>
      </Select>
    </Form.Item>

    <Form.Item label="¿El paciente puede escuchar?" name="Hear" rules={[{ required: true, message: 'Ingrese datos' }]}>
      <Select style={{width:'50%'}}>
      <Option value="china">Si</Option>
        <Option value="usa">No</Option>
      </Select>
    </Form.Item>

    <Form.Item label="¿Puede comunicarse con otras personas?" name="Talk" rules={[{ required: true, message: 'Ingrese datos' }]}>
      <Select style={{width:'50%'}}>
      <Option value="china">Si</Option>
        <Option value="usa">No</Option>
      </Select>
    </Form.Item>
    <Form.Item label="¿El paciente puede ver?" name="See" rules={[{ required: true, message: 'Ingrese datos' }]}>
      <Select style={{width:'50%'}}>
      <Option value="china">Si</Option>
        <Option value="usa">No</Option>
      </Select>
    </Form.Item>
    
    <Form.Item label="¿El paciente comprende ordenes?" name="Order" rules={[{ required: true, message: 'Ingrese datos' }]}>
      <Select style={{width:'50%'}}>
      <Option value="china">Si</Option>
        <Option value="usa">No</Option>
      </Select>
    </Form.Item>
    </section>
    <Form.Item wrapperCol={{ offset: 6, span: 16 }}>
      <Button type="primary" htmlType="submit">
        Enviar
      </Button>
    </Form.Item>

    
  </Form>



    )
};

