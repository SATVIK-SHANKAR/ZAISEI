import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function Register() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();
  

  async function signUp() {
    let item = { name, password, email };
    console.warn(item);
    const response = await fetch("https://zaisei-api-fms3x2nzua-nw.a.run.app/signup/<user-id>/<password>", {
      method: 'POST',
      body: JSON.stringify(item),
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      }
    });
    const result = await response.json();
    localStorage.setItem("user-info", JSON.stringify(result));
    
    navigate("/add");
  }

  return (
    <div className='col-sm-6 offset-sn-3'>
      <h1>Register Page</h1>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} className='form-control' placeholder='name'></input>
      <br />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className='form-control' placeholder='password'></input>
      <br />
      <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} className='form-control' placeholder='email'></input>
      <br />
      <button onClick={signUp} className='btn btn-primary'>Sign Up</button>
    </div>
  );
}

export default Register;
