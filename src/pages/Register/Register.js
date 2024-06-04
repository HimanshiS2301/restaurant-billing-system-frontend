import React,{useState} from "react";
import Axios from 'axios';
import "./Register.css";

const Register = () => {

const [formData,setFormData] = useState({
  name : "",
  email : "",
  password : "",
  confirmpassword : ""
})

const handleChange = (e) => {
const {name,value} = e.target;
setFormData(prevData=>({
  ...prevData,
  [name] : value
}))
}

const onRegistration = (e) => {

const {name,email,password,confirmpassword} = formData;

if(password!==confirmpassword){
  alert("Password and Confirm Password do not match !")
}

Axios.post("http://localhost:5000/api/signup",{
  username:name,
  email:email,
  password:password
})
.then(res=>console.log('res',res))
.catch(err=>console.log(err))
}

  return (
    <div>
      {/* <form> */}
        <div className="register-form">
        <div className="form-group">
          <h3>Create An Account</h3>
          <br />
          <label for="name">Full Name :</label>
          <input type="text" className="form-control" name="name" value={formData.name} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label for="dob">Email :</label>
          <input type="text" className="form-control" name="email" value={formData.email} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label for="email">Password :</label>
          <input type="email" className="form-control" name="password" value={formData.password} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label for="address">Confirm Password :</label>
          <input type="text" className="form-control" name="confirmpassword" value={formData.confirmpassword} onChange={handleChange}/>
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
