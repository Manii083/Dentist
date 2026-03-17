const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const dentistRoutes = require("./routes/dentistRoutes");
const appointmentRoutes = require("./routes/appointmentRoutes");

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb+srv://manideepkatkam83_db_user:s4ofOhZXAB37m2RU@cluster0.feo7kvs.mongodb.net/?appName=Cluster0")
.then(()=>console.log("MongoDB Connected"))
.catch(err=>console.log(err));

app.use("/api/dentists", dentistRoutes);
app.use("/api/appointments", appointmentRoutes);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});