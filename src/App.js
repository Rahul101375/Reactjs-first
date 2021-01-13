import React from 'react';
import './App.css';
import HomePage from './containers/HomePage';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import CustomerAccessPage from './containers/HomePage/customerAccessPage';
import Register from './navbar/Register';
import Login from './navbar/Login';
import SpecialListPortal from './navbar/SpecialListPortal';
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/customer/specaillistportal" exact component={SpecialListPortal}/>
          <Route path="/customer/register" exact component={Register}/>
          <Route path="/customer/login" exact component={Login}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
