import {useEffect,useState} from "react";
import API from "../api";

function AdminPanel(){

const [appointments,setAppointments] = useState([]);

useEffect(()=>{
API.get("/appointments")
.then(res=>setAppointments(res.data));
},[])

return(

<table>

<thead>
<tr>
<th>Patient</th>
<th>Age</th>
<th>Gender</th>
<th>Date</th>
<th>Dentist</th>
<th>Clinic</th>
</tr>
</thead>

<tbody>

{appointments.map(a=>(
<tr key={a._id}>
<td>{a.patientName}</td>
<td>{a.age}</td>
<td>{a.gender}</td>
<td>{a.appointmentDate}</td>
<td>{a.dentistName}</td>
<td>{a.clinicName}</td>
</tr>
))}

</tbody>

</table>

)

}

export default AdminPanel