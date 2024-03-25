import { useState } from "react";
import { redirect, Navigate } from "react-router-dom";

function Registration(props) {
  const t = localStorage.getItem("token")
  if(t){
    console.log("sssssssssssssss", t)
  }else{
    console.log("nope")
  }
  const [inputs, setInputs] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: ""
  })

  console.log(inputs)
  const onchange = (e) => {
    setInputs({...inputs, [e.target.name]: e.target.value});

}

const SubmitEvent = async(e) => {
  e.preventDefault ();
  const newUser = {
    firstname: inputs.firstname, 
    lastname: inputs.lastname, 
    email: inputs.email, 
    password: inputs.password,
   }
   const nn = await fetch("http://localhost:3000/api/auth/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newUser)
  })

  const token = await nn.json()
  console.log(token)
  localStorage.setItem("token", token.token)
  }
  
  
  if (t) {
    // console.log(props.token)
    return <Navigate to="/" />
  } else {
  return (
      <section className="vh-100 bg-image" style={{ backgroundImage: "url('https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp')" }}>
        <div className="mask d-flex align-items-center h-100 gradient-custom-3">
          <div className="container h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                <div className="card" style={{ borderRadius: '15px' }}>
                  <div className="card-body p-5">
                    <h2 className="text-uppercase text-center mb-5">Registration</h2>
  
                    <form onSubmit={(e) => SubmitEvent(e)}>
  
                    <div className="form-outline mb-4">
                        <input type="text" id="form3Example1cg" className="form-control form-control-lg" 
                          value={inputs.firstname}
                          name="firstname"
                          onChange={(e) => onchange(e)}
                        />
                        <label className="form-label" htmlFor="form3Example1cg">firstName</label>
                      </div>
  
                      <div className="form-outline mb-4">
                        <input type="text" id="form3Example3cg" className="form-control form-control-lg"
                          name="lastname"
                         value={inputs.lastname}
                         onChange={(e) => onchange(e)}
                         />
                        <label className="form-label" htmlFor="form3Example3cg">lastName</label>
                      </div>
  
                      <div className="form-outline mb-4">
                        <input type="text" id="form3Example1cg" className="form-control form-control-lg" 
                          value={inputs.email}
                          name="email"
                          onChange={(e) => onchange(e)}
                        />
                        <label className="form-label" htmlFor="form3Example1cg">email</label>
                      </div>
  
                      <div className="form-outline mb-4">
                        <input type="password" id="form3Example1cg" className="form-control form-control-lg" 
                          value={inputs.password}
                          name="password"
                          onChange={(e) => onchange(e)}
                        />
                        <label className="form-label" htmlFor="form3Example1cg">password</label>
                      </div>
  
                      
  
                      <div className="d-flex justify-content-center">
                        <button type="submit"
                          className="btn btn-success btn-block btn-lg gradient-custom-4 text-body">Create Account</button>
                      </div>
  
                      
  
                    </form>
  
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  }
  
  export default Registration;