import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import App from '../App';
import NotFound from './NotFound';

const Router = () => (
    <BrowserRouter>
      <div className="app-wrap">
        <Switch>
          <Route exact path="/" component={App} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </BrowserRouter>
)


export default Router;