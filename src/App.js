import React, { useState, Fragment } from 'react';
import { Button, Layout, Table, Menu } from 'antd';
import { PlusSquareFilled } from '@ant-design/icons';
import AddDrawer from './AddDrawer';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
} from '@ant-design/icons';

import './App.css';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

function App() {

  const [showDrawer, setShowDrawer] = useState(false);
  const [values, setValues] = useState([]);
  const [errorInfo, setErrorInfo] = useState({});
  const [collapsed, setCollapsed] = useState(false);

  const onCollapse = (isCollapsed) => {
    setCollapsed(isCollapsed );
  };

  const handleAddFormOnFinish = (data) => {
    setValues([...values, {
      key: values.length + 1,
      ...data,
    },]);
    setShowDrawer(false);
  }

  const handleAddFormOnFinishFailed = (errorInfo) => {
    setErrorInfo(errorInfo)
  }

  const columns = [
    {
      title: 'FirstName',
      dataIndex: 'firstName',
      key: 'firstName',
    },
    {
      title: 'Last Name',
      dataIndex: 'lastName',
      key: 'lastName',
    },
    {
      title: 'Phone Number',
      dataIndex: 'phoneNumber',
      key: 'phoneNumber',
    },
  ];

  return (
    <>
    <Layout style={{ minHeight: '100vh' }}>
    <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
      <div className="logo" />
      <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
        
       
      </Menu>
    </Sider>
    <Layout className="site-layout">
      <Header style={{ padding: 0, background: '#ffffff' }} />
      <Content style={{ margin: '0 16px' }}>
        
        <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
          <Fragment>
              <div style={{
                  display: 'flex',
                  justifyContent: "space-between",
                  marginBottom: 20
                }}>
              <div></div>
              <div>
                  <Button
                  type="primary"
                  icon={<PlusSquareFilled />}
                  data-testid="add-contact-button"
                  onClick={() => setShowDrawer(true)}
                >
                  Add
                </Button>
              </div>
             
            </div>
            
          <Layout.Content>
            <Table dataSource={values} columns={columns} />
          </Layout.Content>
          
          <AddDrawer
            show={showDrawer}
            handleOnClose={() => setShowDrawer(false)}
            handleOnFinish={handleAddFormOnFinish}
            handleOnFinishFailed={handleAddFormOnFinishFailed}
          />
        </Fragment>
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
    </Layout>
      </Layout>
      
      
    </>
  );
}

export default App;
