import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from './pages/Home';
import Chat from './pages/Chat';
import ProtectedRoute from './ProtectedRoute'

function App() {
  return (
    <Router>
      <Switch>
    <div className="App">
      <Route exact path="/">
        <Home />
      </Route>
      <ProtectedRoute exact path="/rooms/:id">
        <Chat />
      </ProtectedRoute>
    </div>
    </Switch>
    </Router>
  );
}

export default App;
