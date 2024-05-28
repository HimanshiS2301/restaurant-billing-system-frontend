import React from "react";
import Axios from 'axios';
import "./Register.css";

const Register = () => {

const onRegistration = () => {
Axios.post("http://localhost:5000/api/signup",{
  username:'akansha',
  email:'akansha@gmail.com',
  password:'456789'
})
.then(res=>console.log('res',res))
.catch(err=>{})
}

  return (
    <div>
      {/* <form> */}
        <div className="register-form">
        <div className="form-group">
          <h3>Create An Account</h3>
          <br />
          <label for="name">Full Name :</label>
          <input type="text" className="form-control" name="name" />
        </div>
        <div className="form-group">
          <label for="dob">Email :</label>
          <input type="text" className="form-control" name="dob" />
        </div>
        <div className="form-group">
          <label for="email">Password :</label>
          <input type="email" className="form-control" name="email" />
        </div>
        <div className="form-group">
          <label for="address">Confirm Password :</label>
          <input type="text" className="form-control" name="address" />
        </div>

        <button type="submit" className="m-3 btn btn-light" onClick={onRegistration}>
          Register
        </button>

        <div className="login-link-section">
          Already Have An Account? <b>Login here</b>
        </div>

        </div>
      {/* </form> */}
    </div>
  );
};

export default Register;
