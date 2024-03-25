import { useEffect, useState } from "react";
import pdf from "../pdfs/pdf"

const eventspdf = [
  pdf.clearance,
  pdf.graduande,
  pdf.bookfair ,
  pdf.sportsday,
]

function Events() {
  const [Events, setEvents] = useState([])

  useEffect(() => {
    getEvents()
  })
  
  const getEvents = async () => {
    const response = await fetch("http://localhost:3000/api/events")
    const events = await response.json()
    setEvents(events)
  }
  console.log(Events)

  
    return (
      <div className="container mt-5">
        <di className=" row row-cols-3 g-3">
      {Events.map((ele, i) => 
          <div class="col">
          <div className="card" style={{width: "18rem"}}>
     
            <div className="card-body">
              <h5 className="card-title"> {ele.title}</h5>
              <p className="card-text">{ele.description}</p>
              <a href={eventspdf[i]} className="btn btn-primary">read more</a>
            </div>
            </div>
        </div>
        )}
       </di>
      </div>

    
    );
  }
  
  export default Events;