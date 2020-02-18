import React, { useState } from "react";
import MainComponent from './MainComponent';
import PageFilm from './PageFilm'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className='main-container'>
      <Router>
        <Switch>
          <Route path={["/film/:id"]} component={PageFilm} />
          <Route path={["/"]} component={MainComponent} />
        </Switch>
      </Router>
    </div>

  )
}
export default App;