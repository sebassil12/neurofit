import React, { useState } from 'react';
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import {  Layout, Menu, theme } from 'antd';
import { Link, Outlet } from 'react-router-dom';

const {  Content, Footer, Sider } = Layout;


const NeuroNavbar: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);


  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className="demo-logo-vertical" />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={[{
          key:1,
          label:<Link to={"/neuro/home"}>Inicio</Link>,
          icon:<DesktopOutlined />
        },
        {
          key:2,
          label:<Link to={"/neuro/exercise"}>Ejercicios</Link>
        },
        {
          key:3,
          label: <Link to={"/neuro/buy"}>Adquirir</Link>
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