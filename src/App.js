import React, {useEffect} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router , Switch, Link, Route} from "react-router-dom";
import Home from './Home'
const App=()=>{
  return (
      <Router>
          <Switch>
            <Route path="/home" component={Home} />
          </Switch>
      </Router>
  )
}
export default App;