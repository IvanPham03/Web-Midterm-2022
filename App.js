import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import routes from "./routes";

export default function App() {
  const renderRoutes =
    routes &&
    routes.map((route, index) => {
      return (
        <Route
          key={index}
          path={route.path}
          exact={route.exact}
          component={route.main}
        />
      );
    });

  return (
    <BrowserRouter>
      <Switch>{renderRoutes}</Switch>
    </BrowserRouter>
  );
}

