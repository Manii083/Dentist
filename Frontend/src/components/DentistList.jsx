import { useEffect, useState } from "react";
import API from "../api";

function DentistList({setSelectedDentist}) {

  const [dentists,setDentists] = useState([]);

  useEffect(()=>{
    API.get("/dentists")
    .then(res=>setDentists(res.data));
  },[]);

  return (
    <div>
      <h2>Dentists</h2>

      {dentists.map((d)=>(
        <div key={d._id}>
          <h3>{d.name}</h3>
          <p>{d.qualification}</p>
          <p>{d.experience} years</p>
          <p>{d.clinicName}</p>

          <button onClick={()=>setSelectedDentist(d)}>
            Book Appointment
          </button>
        </div>
      ))}

    </div>
  )
}

export default DentistList;