import React from 'react';
import Link from './Link';

const Register = ()=>{
    return (
        <div className='ui raised very padded text container segment'>
            <form className="ui form">
                <label className="field">Name</label>  <div className="two fields"> <div className="field"><input type="text" placeholder="Enter the Firstname" /></div>
                <div className="field"><input type="text" placeholder="Enter the Firstname" /></div></div>
               
                <label className="field">Your Email</label>   <input type="text" className="ui input focus" /><br />
                <label className="field">Password</label>     <input type="text" placeholder="Password" className="ui input focus" /><br/>
                <label className="field">Confirm Password</label>  <input type="text" className="ui input focus" placeholder="confirm password" /><br /><br />
                <input type="checkbox" className='ui checkbox'/><text style={{marginLeft:"2%"}}>I agree to the <a>Terms and Conditions</a></text><br/><br />
                <button className="ui primary button">Register</button>
                <h5>Already a member? <Link href='/Login'>Signin</Link></h5>
            </form>
        </div>
    )
}

export default Register;