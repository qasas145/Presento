import React, {useEffect} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router , Switch, Link, Route, Redirect} from "react-router-dom";
import Home from './Home'
const App=()=>{
  return (
      <Router>
        <Redirect to="/home"/>
          <Switch>
            <Route path="/home" component={Home} />
          </Switch>
      </Router>
  )
}
export default App;