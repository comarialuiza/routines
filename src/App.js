import React from 'react';

import Holder from './components/Holder';
import { MorningProvider } from './services/MorningContext';
import { NightProvider } from './services/NightContext';

import GlobalStyle from './styles/global';

function App() {
  return (
    <MorningProvider>
    <NightProvider>
      <Holder />
      <GlobalStyle />
    </NightProvider>
    </MorningProvider>
  );
}

export default App;
