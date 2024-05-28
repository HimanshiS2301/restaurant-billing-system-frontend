import React from 'react'

const Login = () =>{
return(
    <div>

<form>
        <div className="form-group">
          <h3>Login</h3>
          <br />
        </div>
        <div className="form-group">
          <label for="dob">Email :</label>
          <input type="text" className="form-control" name="dob" />
        </div>
        <div className="form-group">
          <label for="email">Password :</label>
          <input type="email" className="form-control" name="email" />
        </div>

        <button type="submit" className="btn">
          Login
        </button>

        <div className="login-link-section">
          Don't Have An Account? <b>Sign Up</b>
        </div>
      </form>

    </div>
)
}

export default Login