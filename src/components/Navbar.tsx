import React from 'react';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { Link, Outlet } from 'react-router-dom';

const { Header, Content, Footer } = Layout;



const Navbar: React.FC = () => {


  return (
    <Layout>
      <Header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 1,
          width: '100%',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <div className="demo-logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['1']}
          items={[
            {
                key:1, 
                label:<Link to={"/home"}>Inicio</Link>
            },
            {
                key:2,
                label: <Link to={"/about"}>Nosotros</Link>
            },
            {
                key:3, 
                label: <Link to={"/buy"}>Adquirir</Link>
            }
            
          ]}
          style={{ flex: 1, minWidth: 0 }}
        />
      </Header>
      <Content style={{ padding: '0 48px' }}>
        <Outlet />
      </Content>
      <Footer style={{ textAlign: 'center' }}>

      </Footer>
    </Layout>
  );
};

export default Navbar;