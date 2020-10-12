import React, { useState } from 'react';
import './LogIn.css';

function LogIn({ setUserLogIn }){

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleEmailInput(event){
        setEmail(event.target.value)
    }

    function handlePasswordInput(event){
        setPassword(event.target.value)
    }

    function handleLogin(event){
        event.preventDefault();

        if (email === 'leslienarh@gmail.com' && password === '1234567'){
            setUserLogIn(true)
        }
    }

    return(
        <div className='container'>
            <div className='form-container'>
                <form>
                    <label>Email</label>
                    <input type='text' value={email} onChange={handleEmailInput}></input>
                <br></br>
                    <label>Password</label>
                    <input type='password' value={password} onChange={handlePasswordInput}></input>
                <br></br>
                    <button onClick={handleLogin}>Login</button>
                </form>
            </div>
            <div className='weather-container'>
                <p>Weather goes here</p>
            </div>
        </div>
    )
}

export default LogIn;