import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./components/Login";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        {/* Otras rutas */}
      </Switch>
    </Router>
  );
}

export default App;