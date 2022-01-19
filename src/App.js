import React from 'react';
import './App.css';
import Home from './Component/Home';
import Header from './Component/Header';
import Detail from './Component/Detail';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <div className="App">
        <Router>
          <Header />
          <Switch>
            <Route path="/Detail">
               <Detail />
            </Route>

            <Route path="/Home">
              <Home />
            </Route>
          </Switch>
        </Router>
    </div>
  );
}

export default App;
