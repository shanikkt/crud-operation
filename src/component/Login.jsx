import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'


//470871192283-1inb4e5sad75bkntvgcblbt0er5ee47a.apps.googleusercontent.com
//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


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = (e) => {
      e.preventDefault();
      localStorage.setItem("email",email);
      alert("Login successful");
      navigate("/");
  }


  

  return (
    <div className='mainDiv'>
        <div className='buttonDiv'>
            <button onClick={()=>navigate("/")} type="button" className="btn btn-primary">Show Posts</button> 
        </div>
        <h1>LogIn Page</h1>
        <div className='container'>
          <form>
              <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input type="email" className="form-control" value={email} onChange={(e)=>setEmail(e.target.value)} required/>
              </div>
              <div className="mb-3">
                  <label className="form-label">Password</label>
                  <input type="password" className="form-control" value={password} onChange={(e)=>setPassword(e.target.value)} required/>
              </div>
              <button type="submit" className="btn btn-primary" onClick={handleLogin}>Log In</button>
          </form>
        </div>
        
    </div>
  )
}

export default Login