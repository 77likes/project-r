import React from 'react';
import { Route } from 'react-router-dom';

import { Home, AvatarComposition, ItemSimulator } from './pages';

function App(props) {
  return (
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/item" component={ItemSimulator} />
      <Route path="/avatar" component={AvatarComposition} />
    </div>
  );
}

export default App;
