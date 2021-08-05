import React from 'react';
import { HashRouter, Route } from 'react-router-dom';

import { Home, AvatarComposition, ItemSimulator } from './pages';

function App(props) {
  return (
    <div>
      <HashRouter basename={process.env.PUBLIC_URL}>
        <Route exact path="/" component={Home} />
        <Route path="/item" component={ItemSimulator} />
        <Route path="/avatar" component={AvatarComposition} />
      </HashRouter>
    </div>
  );
}

export default App;
