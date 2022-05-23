import React from 'react'
import UseLogin from './UseLogin'
import './Login.css'
import fire from '../../config/Firebase';
import { useState } from 'react';
import Home from '../../pages/home/Home';
import { Link } from 'react-router-dom';

export default function Login() {

const [login, isLogin] = useState('')

    const { onSubmitHandler,
        setEmail,
        setPassword,
        email,
        password,
        loader, } =
         UseLogin();

        const  handleSubmit = (event) =>{
            event.preventDefault()
            console.log(email,password);
            fire.auth().signInWithEmailAndPassword(email,password).then(()=>{
              alert("Login success")
              if (isLogin) {
                  <>
                  <Home />
                 <Link to="/home">home</Link>
                 </>
              }
            }).catch((error)=>{
              alert("No user exist | ",error);
            })
          }
        
          const Logout = ()=>{
            fire.auth().signOut();
            alert("Log out Successfully")
          }


    return (
        <div>
            <h1 style={{ color: 'black' }}>Login Page</h1>


            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div class="mb-3">
                            <label for="Enter email" class="form-label">Email</label>
                            <input type="email" class="form-control" id="Enter email" value={email} placeholder="enter your email" onChange={(e) => setEmail(e.target.value)} />
                        </div>
                    </div>

                    <div className="col-md-12">
                        <div class="mb-3">
                            <label for="Enter password" class="form-label">password</label>
                            <input type="password" class="form-control" id="Enter password" value={password} placeholder="enter your password" onChange={(e) => setPassword(e.target.value)}  />
                        </div>
                    </div>



                </div>
            </div>


            {/* js  logic */}
            {
                loader ?
                    (
                        <button>loading....</button>
                    )
                    : (
                        <div className="container">
                            <button onClick={handleSubmit}>Submit data</button>
                        </div>
                    )
            }


           
        </div>
    )
}
