import React from 'react';
import Link from './Link';

const Forgetpassword = ()=>{
    return (
        <div className="ui raised very padded text container segment">
           <form className="ui form">
            <h1>Forgot Password?</h1>
            <label className='ui label'>Enter the Registered Email</label><br/>
            <input className="ui input focus Finput" placeholder="Email Id" /><br/><br/>
            <button className="ui button" >Submit!</button>
            </form>
        </div>
    )
}
export default Forgetpassword;