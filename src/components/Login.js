import React from 'react';
import Link from './Link';


const Login = ()=>{
return (
    <div className="ui raised very padded text container segment">
        <form className="ui form">
            <label className="field">Username</label>
            <input type="text" placeholder="Enter the username" className="ui input focus"/><br />
            <label className="field">Password</label>
            <input type="text" className="ui input focus" /> <br /><br />
            <input type="radio" /><text style={{marginLeft:"2%"}}>Remember me</text>
            <Link href="/Forgetpassword"><text style={{marginLeft:"60%"}}>Forget Password?</text></Link><br /><br />
            <button className="ui primary button">Submit!</button><br /><br />
            <text><Link href="/Register">Create new account</Link></text>
        </form>
    </div>
)
};

export default Login;