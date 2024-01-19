import React, { useState } from 'react';
import {
  HomeOutlined,
  ShoppingCartOutlined,
  PlayCircleOutlined,
  LogoutOutlined,

} from '@ant-design/icons';
import {  Layout, Menu } from 'antd';
import { Link, Outlet } from 'react-router-dom';
import { LOGO } from '../../constants/constants';

const {  Content, Footer, Sider } = Layout;


const NeuroNavbar: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);


  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className="demo-logo-vertical" />
        <Menu theme="dark"  mode="inline" items={[
          {
            key:0,
            label: <h1>NeuroFit</h1>,
            icon: <img src={LOGO.main} style={{width:20}}/>
          },
          
          {

          key:1,
          label:<Link to={"/neuro"}>Inicio</Link>,
          icon:<HomeOutlined />
        },
        {
          key:2,
          label:<Link to={"/neuro/exercise"}>Ejercicios</Link>,
          icon:<PlayCircleOutlined />
        },
        {
          key:3,
          label: <Link to={"/neuro/buy"}>Adquirir</Link>,
          icon: <ShoppingCartOutlined />
          
        },
        {
          key:4,
          label: <Link to={"/"}>Cerrar Sesion</Link>,
          icon:<LogoutOutlined />
        }]} />
        
      </Sider>
      
      <Layout>
  
        <Content style={{ margin: '0 16px' }}>
          <Outlet />
        </Content>
        <Footer style={{ textAlign: 'center' }}>
         
        </Footer>
      </Layout>
    </Layout>
  );
};

export default NeuroNavbar;