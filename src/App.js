import React, { useState } from 'react';
import { Button } from 'antd';
import { PlusSquareFilled } from '@ant-design/icons';
import AddDrawer from './AddDrawer';

import './App.css';

function App() {

  const [showDrawer, setShowDrawer] = useState(false);
  const [values, setValues] = useState({});
  const [errorInfo, setErrorInfo] = useState({});

  const handleAddFormOnFinish = (values) => {
    setValues(values);
  }

  const handleAddFormOnFinishFailed = (errorInfo) => {
    setErrorInfo(errorInfo)
  }

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
