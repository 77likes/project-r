import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import { Home, AvatarComposition, ItemSimulator } from './pages';

function App(props) {
  return (
    <div>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Route exact path="/" component={Home} />
        <Route path="/item" component={ItemSimulator} />
        <Route path="/avatar" component={AvatarComposition} />
      </BrowserRouter>
    </div>
  );
}

export default App;
