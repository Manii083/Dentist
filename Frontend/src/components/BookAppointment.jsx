import { useState } from "react";
import API from "../api";

function BookAppointment({dentist}){

const [form,setForm] = useState({
patientName:"",
age:"",
gender:"",
appointmentDate:""
})

const handleSubmit = async(e)=>{
e.preventDefault();

await API.post("/appointments",{
...form,
dentistName: dentist.name,
clinicName: dentist.clinicName
});

alert("Appointment booked!");
}

return(
<form onSubmit={handleSubmit}>

<input
placeholder="Patient Name"
onChange={(e)=>setForm({...form,patientName:e.target.value})}
/>

<input
placeholder="Age"
onChange={(e)=>setForm({...form,age:e.target.value})}
/>

<select
onChange={(e)=>setForm({...form,gender:e.target.value})}
>
<option>Male</option>
<option>Female</option>
</select>

<input
type="date"
onChange={(e)=>setForm({...form,appointmentDate:e.target.value})}
/>

<button type="submit">
Book Appointment
</button>

</form>
)
}

export default BookAppointment