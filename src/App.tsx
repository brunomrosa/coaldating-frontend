import React from 'react';
import Routes from './routes/index';
import GlobalStyle from './global/styles';
import { BrowserRouter as Router } from 'react-router-dom';
function App() {
  return (
    <Router>
      <Routes />
      <GlobalStyle />
    </Router>
  );
}

export default App;
