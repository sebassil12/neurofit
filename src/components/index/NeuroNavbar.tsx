import React from 'react';
import { Layout, Menu } from 'antd';
import { Link, Outlet } from 'react-router-dom';
import { LOGO } from '../../constants/constants';
import FooterMain from '../../pages/FooterMain';

const { Header, Content, Footer } = Layout;



const NeuroNavbar: React.FC = () => {


  return (
    <Layout >
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
              key: 0,
              label:<h1><img src={LOGO.main} style={{width:40,height:40, display:'inline', transform:'translate(0,20%)'}}/>NeuroFITT</h1>,
              
            },
            {
                key:1, 
                label:<Link to={"/"}>Inicio</Link>
            },
            {
                key:2,
                label: <Link to={"/about"}>Nosotros</Link>
            },
            {
                key:3, 
                label: <Link to={"/login"}>Iniciar Sesion</Link>
            }
            
          ]}
          style={{ flex: 1, minWidth: 0 }}
        />
      </Header>
      <Content style={{backgroundColor:'var(--third)'}}>
        <Outlet/>
      </Content>
      <Footer style={{ textAlign: 'center' ,backgroundColor:'var(--secondary)'}}>
          <FooterMain />
      </Footer>
    </Layout>
  );
};

export default NeuroNavbar;