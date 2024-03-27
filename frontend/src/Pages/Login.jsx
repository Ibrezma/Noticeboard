import { useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import { Navigate, redirect, useNavigate } from "react-router-dom";

function Login(){
  const t = localStorage.getItem("token")
  const [inputs, setInputs] = useState({
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
      email: inputs.email, 
      password: inputs.password,
     }

     console.log(newUser)
     try {
      const nn = await fetch("http://localhost:3000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        'Accept': 'application/json'
      },
      body: JSON.stringify(newUser)
    })

    
    const token = await nn.json()
    console.log(token)
    if(token.masg){
      toast.error(token.masg)
    }else{
      toast.success("Login successful")
      localStorage.setItem("token", token.token)
      setInputs({
        email: "",
        password: ""
      })
    }
     } catch (error) {
      console.error(error)
     }
     
     
  
    }

    if (t) {
      return <Navigate to={"/"} />
    }else{
    return (
      <section className="vh-100 bg-image" style={{ backgroundImage: "url('https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp')" }}>
      <Toaster />
      <div className="mask d-flex align-items-center h-100 gradient-custom-3">
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-9 col-lg-7 col-xl-6">
              <div className="card" style={{ borderRadius: '15px' }}>
                <div className="card-body p-5">
                  <h2 className="text-uppercase text-center mb-5">Login</h2>

                  <form onSubmit={(e) => SubmitEvent(e)}>

                    

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
                        className="btn btn-success btn-block btn-lg gradient-custom-4 text-body">Submit</button>
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
export default Login;

// import { useState } from "react";
// import { useNavigate } from "react-router-dom";

// function Login() {
//   const t = localStorage.getItem("token");
//   const navigate = useNavigate();
//   const [inputs, setInputs] = useState({
//     email: "",
//     password: ""
//   });

//   const onchange = (e) => {
//     setInputs({ ...inputs, [e.target.name]: e.target.value });
//   };

//   const SubmitEvent = async (e) => {
//     e.preventDefault();
//     const newUser = {
//       email: inputs.email,
//       password: inputs.password,
//     };

//     try {
//       const response = await fetch("http://localhost:3000/api/auth/login", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Accept: "application/json",
//         },
//         body: JSON.stringify(newUser),
//       });

//       const token = await response.json();
//       console.log(token);
//       localStorage.setItem("token", token.token);
//       // Redirect to the home page
//       navigate("/");
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   if (t) {
//     return <Navigate to={"/"} />;
//   } else {
//     return (
//       <section className="vh-100 bg-image" style={{ backgroundImage: "url('https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp')" }}>
//         <div className="mask d-flex align-items-center h-100 gradient-custom-3">
//           <div className="container h-100">
//             <div className="row d-flex justify-content-center align-items-center h-100">
//               <div className="col-12 col-md-9 col-lg-7 col-xl-6">
//                 <div className="card" style={{ borderRadius: '15px' }}>
//                   <div className="card-body p-5">
//                     <h2 className="text-uppercase text-center mb-5">Login</h2>
//                     <form onSubmit={(e) => SubmitEvent(e)}>
//                       <div className="form-outline mb-4">
//                         <input type="text" id="form3Example1cg" className="form-control form-control-lg"
//                           value={inputs.email}
//                           name="email"
//                           onChange={(e) => onchange(e)}
//                         />
//                         <label className="form-label" htmlFor="form3Example1cg">email</label>
//                       </div>
//                       <div className="form-outline mb-4">
//                         <input type="password" id="form3Example1cg" className="form-control form-control-lg"
//                           value={inputs.password}
//                           name="password"
//                           onChange={(e) => onchange(e)}
//                         />
//                         <label className="form-label" htmlFor="form3Example1cg">password</label>
//                       </div>
//                       <div className="d-flex justify-content-center">
//                         <button type="submit" className="btn btn-success btn-block btn-lg gradient-custom-4 text-body">Submit</button>
//                       </div>
//                     </form>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     );
//   }
// }

// export default Login;
