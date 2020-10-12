import React, { useState } from 'react';

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
        <div>
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
    )
}

export default LogIn;