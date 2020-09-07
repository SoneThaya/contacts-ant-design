import React, { useState, Fragment } from 'react';
import { Button, Layout, Table, Menu } from 'antd';
import { PlusSquareFilled, DeleteOutlined, EditOutlined } from '@ant-design/icons';
import EditContact from './EditContact';
import { connect } from 'react-redux';
import { addContact, deleteContact } from './redux/contacts/actions';

import './App.css';

const { Header, Content, Footer, Sider } = Layout;

const App = ({ contacts, addContact, deleteContact }) => {

  const [showDrawer, setShowDrawer] = useState(false);
  const [errorInfo, setErrorInfo] = useState({});
  const [collapsed, setCollapsed] = useState(false);
  const [contact, setContact] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: null,
  });

  const onCollapse = (isCollapsed) => {
    setCollapsed(isCollapsed );
  };

  const handleAddFormOnFinish = (data) => {
    addContact({
      key: contacts.length + 1,
      ...data,
    })
    setShowDrawer(false);
  }

  const handleAddFormOnFinishFailed = (errorInfo) => {
    setErrorInfo(errorInfo)
  }

  const handleOnClose = () => {
    setShowDrawer(false);
    setContact({firstName: "",
    lastName: "",
    phoneNumber: null,});
  }

  const openEditDrawer = (contact) => {
    setContact(contact);
    setShowDrawer(true);
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
    {
      title: "Action",
      key: "action",
      render: (text, contact) => (
        <span>
          <Button
            onClick={() => deleteContact(contact.key)}
            icon={<DeleteOutlined />}
          />
          <Button
            style={{ marginLeft: 5 }}
            onClick={() => openEditDrawer(contact)}
            icon={<EditOutlined />}
          />
        </span>
      ),
    }
  ];

  return (
    
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
            <Table dataSource={contacts} columns={columns} />
          </Layout.Content>
          
          <EditContact
            show={showDrawer}
            handleOnClose={handleOnClose}
            handleOnFinish={handleAddFormOnFinish}
            handleOnFinishFailed={handleAddFormOnFinishFailed}
            initialValue={contact}
          />
        </Fragment>
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </Layout>
      
  );
}

const mapStateToProps = (state) => {
  return {
    contacts: state.contacts && state.contacts.allContacts,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addContact: (contact) => {
      dispatch(addContact(contact));
    },
    deleteContact: (key) => {
      dispatch(deleteContact(key))
    }
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(App);
