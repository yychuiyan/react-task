import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Task from '../src/views/Task-Class/Task';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Task />
);
