import React from 'react';
import {Provider as PaperProvider} from 'react-native-paper';

// Components
import Home from './src/components/Home';

const App = () => {
  return (
    <PaperProvider>
      <Home />
    </PaperProvider>
  );
};

export default App;
