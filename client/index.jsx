import React from 'react';
import { Router } from 'react-router';
import { History } from 'react-router/lib/BrowserHistory';
import routes from 'routes';

React.render(
  <Router children={routes} history={history} />,
  document.getElementById('react-view')
);
