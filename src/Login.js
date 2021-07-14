import React, { useState } from "react"
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap/dist/js/bootstrap.bundle'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useEffect } from "react";
const Login=()=>{
    const endpoint="http://127.0.0.1:8000/"
    const[users, setUsers]=useState([])
    // const getData=async()=>{
    //     const res=await fetch(endpoint+'api/try/', {
    //         method :"POST",
    //         headers : {
    //             "Content-Type": "application/json"
    //         },
    //         body :JSON.stringify({
    //             name :"mohamed sayed",
    //             email :"qasas145@gmail.com"
    //         })
    //     })
    //     const data=await res.json();
    //     console.log(data)
    //     setUsers(data)
    // }
    // useEffect(()=>{
    //     getData();
    // },[])
    return (
        <div className="row">
            <span>login page</span>
            <div className="col-lg-6">
                <div className="card">
                    <div className="card-body">
                        <p className="card-text">hello every one in this page this the style of the ten in that app of the two that has the most of the two </p>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <p className="card-text">hello every one in this page this the style of the ten in that app of the two that has the most of the two </p>
                    </div>
                </div>
                <button className="btn btn-primary">send</button>
            </div>
            <div className="border">
                {users.map((data, index)=>{
                    return (
                        <ul className="nav bg-primary" key={index}>
                            <li className="nav-item text-white bg-success">{data.name} : {data.email}</li>
                        </ul>
                    )
                })}
            </div>
        </div>
    )
}
export default Login;