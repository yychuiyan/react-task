import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Task from '../src/views/Task-Class/Task';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/locale/zh_CN'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <ConfigProvider locale={zhCN}>
    <Task />
  </ConfigProvider>
);
