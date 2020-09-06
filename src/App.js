import React from 'react';
import { Button } from 'antd';
import { PlusSquareFilled } from '@ant-design/icons';

import './App.css';

function App() {
  return (
    <Button type="primary" icon={<PlusSquareFilled />}>
      Add
    </Button>
  );
}

export default App;
