import React, { useState } from 'react';
import { Button, Layout, Table, Menu, Breadcrumb } from 'antd';
import { PlusSquareFilled } from '@ant-design/icons';
import AddDrawer from './AddDrawer';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';

import './App.css';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

function App() {

  const [showDrawer, setShowDrawer] = useState(false);
  const [values, setValues] = useState([]);
  const [errorInfo, setErrorInfo] = useState({});
  const [collapsed, setCollapsed] = useState(false);

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
    <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
      <div className="logo" />
      <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
        <Menu.Item key="1" icon={<PieChartOutlined />}>
          Option 1
        </Menu.Item>
        <Menu.Item key="2" icon={<DesktopOutlined />}>
          Option 2
        </Menu.Item>
        <SubMenu key="sub1" icon={<UserOutlined />} title="User">
          <Menu.Item key="3">Tom</Menu.Item>
          <Menu.Item key="4">Bill</Menu.Item>
          <Menu.Item key="5">Alex</Menu.Item>
        </SubMenu>
        <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
          <Menu.Item key="6">Team 1</Menu.Item>
          <Menu.Item key="8">Team 2</Menu.Item>
        </SubMenu>
        <Menu.Item key="9" icon={<FileOutlined />} />
      </Menu>
    </Sider>
    <Layout className="site-layout">
      <Header className="site-layout-background" style={{ padding: 0 }} />
      <Content style={{ margin: '0 16px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>User</Breadcrumb.Item>
          <Breadcrumb.Item>Bill</Breadcrumb.Item>
        </Breadcrumb>
        <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
        
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
    </Layout>
  </Layout>
      <Button
        type="primary"
        icon={<PlusSquareFilled />}
        data-testid="add-contact-button"
        onClick={() => setShowDrawer(true)}
      >
        Add
      </Button>
      <Layout.Content>
        <Table dataSource={values} columns={columns} />
      </Layout.Content>
      
      <AddDrawer
        show={showDrawer}
        handleOnClose={() => setShowDrawer(false)}
        handleOnFinish={handleAddFormOnFinish}
        handleOnFinishFailed={handleAddFormOnFinishFailed}
      />
    </>
  );
}

export default App;
