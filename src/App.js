import React from 'react';
import {Router} from '@reach/router';
import {GlobalStyle} from './styles/GlobalStyle';

import Block from './Block';


const App = () => {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Block path="/"/>
      </Router>
    </>
  )
}

export default App;
