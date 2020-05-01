import React from 'react';

import Holder from './components/Holder';
import { TaskProvider } from './services/TaskContext';

import GlobalStyle from './styles/global';

function App() {
  return (
    <TaskProvider>
      <Holder />
      <GlobalStyle />
    </TaskProvider>
  );
}

export default App;
