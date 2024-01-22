import { useState } from "react";

const Login = () => {
    const[username, usernameupdate] = useState('');
    const[password, passwordupdate] = useState('');

    const ProceedLogin = (e) =>{
        e.preventDefault();
        if(validate()){
        console.log('proceed');
        }
    }
    const validate=() =>{
        let result = true;
        if(username ==='' || username ===null){
            result=false;
            toast.warning("pls enter username");
        }
        if(password ==='' || password ===null){
            result=false;
            toast.warning("pls enter password");
        }
    }
    return (
        <div className="row">
            <div className="offset-lg-3 col-lg-6">
                <form onSubmit={ProceedLogin} className="container">
                    <div className="card">
                        <div className="card-header">
                            <h2>user login</h2>
                        </div>
                        <div className="card-body">
                            <div className="form-group">
                                <label>username<span className="errmsg"></span></label>
                                <input value={username} onChange={e=>usernameupdate(e.target.value)} className="form-control"></input>

                            </div>
                            <div className="form-group">
                                <label>password<span className="errmsg"></span></label>
                                <input type="password" value={password} onChange={e=>passwordupdate(e.target.value)} className="form-control"></input>

                            </div>

                        </div>
                        <div className="card-footer">
                            <button type="submit" className="btn btn-primary">login</button>
                            <Link className="btn btn-success" to={'/Register'}>new user</Link>

                        </div>

                    </div>
                </form>

            </div>
            
        </div>
    )
}
export default LoginForm;