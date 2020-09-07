import React, { useState } from 'react';
import { Button, Layout, Table } from 'antd';
import { PlusSquareFilled } from '@ant-design/icons';
import AddDrawer from './AddDrawer';

import './App.css';

function App() {

  const [showDrawer, setShowDrawer] = useState(false);
  const [values, setValues] = useState([]);
  const [errorInfo, setErrorInfo] = useState({});

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
