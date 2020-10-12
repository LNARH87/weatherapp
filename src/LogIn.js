import React, { useState } from 'react';
import './LogIn.css';
import WeatherComponent from './WeatherComponent';

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
            <h1>Sign in</h1>
                <form>
                    <input type='text' value={email} onChange={handleEmailInput} placeholder='Email'></input>
                <br></br>
                    <input type='password' value={password} onChange={handlePasswordInput} placeholder='Password'></input>
                <br></br>
                    <button onClick={handleLogin}>Login</button>
                </form>
            </div>
            <div className='weather-container'>
                <WeatherComponent />
            </div>
        </div>
    )
}

export default LogIn;