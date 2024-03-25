import { useState } from "react";
import { Navigate } from "react-router-dom";

function Create() {
  const t = localStorage.getItem("token")

  const [inputs, setInputs] = useState({
    title: "",
    description: "",
    starting: "",
    ending: ""
  })

 
  console.log(inputs)
  const onchange = (e) => {
    setInputs({...inputs, [e.target.name]: e.target.value});
}
const SubmitEvent = async(e) => {
  e.preventDefault ();
  const newEvent = {
    title: inputs.title, 
    description: inputs.description, 
    starting_date: inputs.starting, 
    ending_date: inputs.ending
   }


  const nn = await fetch("http://localhost:3000/api/events/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newEvent)
  })

  const jj = await nn.json()
  console.log(token)


}
  // const [Description, setDescription] = useState("")
  // const [Starting_date, setStarting_date ] = useState("")
  if (!t){
    return <Navigate to={"/Login"} />
  }else{

 

    return (
      <section className="vh-100 bg-image" style={{ backgroundImage: "url('https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp')" }}>
        <div className="mask d-flex align-items-center h-100 gradient-custom-3">
          <div className="container h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                <div className="card" style={{ borderRadius: '15px' }}>
                  <div className="card-body p-5">
                    <h2 className="text-uppercase text-center mb-5">Create New Event</h2>
  
                    <form onSubmit={(e) => SubmitEvent(e)}>
  
                      <div className="form-outline mb-4">
                        <input type="text" id="form3Example1cg" className="form-control form-control-lg" 
                          value={inputs.title}
                          name="title"
                          onChange={(e) => onchange(e)}
                        />
                        <label className="form-label" htmlFor="form3Example1cg">Title</label>
                      </div>
  
                      <div className="form-outline mb-4">
                        <textarea type="textarea" id="form3Example3cg" className="form-control form-control-lg"
                          name="description"
                         value={inputs.description}
                         onChange={(e) => onchange(e)}
                         />
                        <label className="form-label" htmlFor="form3Example3cg">Description</label>
                      </div>
  
                      <div className="form-outline mb-4">
                        <input type="text" id="form3Example4cg" className="form-control form-control-lg" 
                          name="starting"
                          value={inputs.starting}
                          onChange={(e) => onchange(e)}
                        />
                        <label className="form-label" htmlFor="form3Example4cg">Start date</label>
                      </div>
  
                      <div className="form-outline mb-4">
                        <input type="text" id="form3Example4cdg" className="form-control form-control-lg" 
                          name="ending"
                          value={inputs.ending}
                          onChange={(e) => onchange(e)}
                        />
                        <label className="form-label" htmlFor="form3Example4cdg">Ending date</label>
                      </div>
  
                      
  
                      <div className="d-flex justify-content-center">
                        <button type="submit" className="btn btn-success btn-block btn-lg gradient-custom-4 text-body">Create Notice</button>
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
  export default Create;
  