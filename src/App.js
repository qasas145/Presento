<<<<<<< HEAD
import React from "react"
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom"
import Home from "./Home"
const App=()=>{
  return (
    <div>
      <Router>
        <Redirect to="/home"/>
        <Switch>
          <Route  path="/home" component={Home}/>
        </Switch>
      </Router>
    </div>
=======
import React, {useEffect} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router , Switch, Link, Route} from "react-router-dom";
import Home from './Home'
import Login from './Login'
import axios from 'axios';
const App=()=>{
  const getData=async()=>{
    // axios({
    //   url :"http://127.0.0.1:8000/api/try",
    //   method :"POST",
    //   headers :{
    //     "Content-Type" :"applocation/json"
    //   },
    //   body :JSON.stringify({
    //     email :"hamo qasas"
    //   })
    // })
    // .then((data)=>{
    //   console.log(data)

    // })
    const res=await fetch('api/try/', {
      method :"POST",
      headers :{
        "Content-Type": "application/json"
      },
      body :JSON.stringify({
        email :"mohamed"
      })
    })
    const data=await res.json();
    console.log(data)
  }
  useEffect(()=>{
    getData();
  })
  return (
      <Router>
        <Link to="/login">login</Link>
          <Switch>
            <Route path="/home" component={Home} />
            <Route path="/login" component={Login}/>
          </Switch>
      </Router>
>>>>>>> b4c15f937ba2fa2da514d81864a7904e52543f86
  )
}
export default App;