import {useState} from "react";
import DentistList from "./components/DentistList";
import BookAppointment from "./components/BookAppointment";
import AdminPanel from "./components/AdminPanel";
import "./App.css";

function App(){

const [selectedDentist,setSelectedDentist] = useState(null)

return(
<div>

<DentistList setSelectedDentist={setSelectedDentist}/>

{selectedDentist && (
<BookAppointment dentist={selectedDentist}/>
)}

<AdminPanel/>

</div>
)

}

export default App