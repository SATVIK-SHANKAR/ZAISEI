import React, { useEffect, useState } from 'react'; 
import { useNavigate } from 'react-router-dom';

import Header from './Header';
function Login() {
    const [email, setEmail] = useState(" ");
    const [password, setPassword] = useState(" ");
    const navigate = useNavigate();
    
    useEffect(() => {
        if (localStorage.getItem("user-info")) {
            navigate("/add");
        }
    }, [])
    async function login() {
        let item = { email, password };
        console.warn(email, password);
        let result = await fetch("https://zaisei-api-fms3x2nzua-nw.a.run.app/login/<user-id>/<password>",{
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }, 
            body : JSON.stringify(item)
        });
        result = await result.json(); 
        localStorage.setItem("user-info ",JSON.stringify(result));
        
        navigate("/add");
    }
    return (
        <div>
            <Header />
            <h1>Login Page</h1>
            <div className="col-m-6 offset-sm-3">
            <input type="text" placeholder='email' onChange={(e) => setEmail(e.target.value)} className='form-control' />
            <br />
            <input type="password" placeholder='password' onChange={(e) => setPassword(e.target.value)} className='form-control' />
            <br />
            <button onClick={login} className='btn btn-primary'>Login</button>
            </div>
        </div>
    )
}
export default Login;