import express from 'express';
import React from 'react';
import { Router } from 'react-router';
import Location from 'react-router/lib/Location';
import routes from 'routes';

const app = express();

app.use((req, res) => {
  const location = new Location(req.path, req.query);

  Router.run(routes, location, (err, routeState) => {
    if (err) return console.error(err);

    if (!routeState) return res.status(404).end('404');

    const InitialComponent = (
      <Router {...routeState} />
    );

    const componentHTML = React.renderToString(InitialComponent);
    const HTML = `
      <!DOCTYPE html>
        <head>
          <meta charset="utf-8">
          <title>Isomorphic Redux Example</title>
        </head>
        <body>
          <div id="react-view">${componentHTML}</div>
          <script type="application/javascript" src="bundle.js"></script>
        </body>
      </html>
    `;

    res.end(HTML);
  });
});

export default app;
