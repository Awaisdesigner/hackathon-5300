import React from 'react'
import UseSignUp from './UseSignUp';
import './SignUp.css'


export default function SignUp() {
    const { onSubmitHandler,
        setEmail,
        setPassword,
        setName,
        setCity,
        loader, } = UseSignUp();

    return (
        <div>
            <h1>
                Login Page
            </h1>
            <form>
                <div class="container">
                    <h1 style={{ color: 'black' }}>Sign Up</h1>

                    <hr />

                    <label for="Name"><b>Name</b></label>
                    <input type="text" placeholder="Enter Name" name="name" autoComplete='off' onChange={(e)=> setName(e.target.value)} />

                    <label for="email"><b>Email</b></label>
                    <input type="text" placeholder="Enter Email" name="email" autoComplete='off' onChange={(e)=> setEmail(e.target.value)} />

                    <label for="email"><b>City</b></label>
                    <input type="text" placeholder="Enter Your City" name="text" autoComplete='off' onChange={(e)=> setCity(e.target.value)}/>

                    <label for="psw"><b>Password</b></label>
                    <input type="password" placeholder="Enter Password" name="psw" onChange={(e)=> setPassword(e.target.value)} />

                    {/* <label for="psw-repeat"><b>Repeat Password</b></label>
                    <input type="password" placeholder="Repeat Password" name="psw-repeat" required /> */}




                </div>
            </form>
            {/* js  logic */}
            {
                loader ?
                    (
                        <button>loading.....</button>
                    )
                    : (
                        <div className="container">
                            <button onClick={onSubmitHandler}>Signup</button>
                        </div>
                    )
            }



        </div>
    )
}
