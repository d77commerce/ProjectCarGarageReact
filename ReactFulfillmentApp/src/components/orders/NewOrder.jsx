import React from "react";
import { useState,useRef } from 'react';
import {ControlContainer , Label , Input, Button } from "../styledComponents/StyledComponents";
import moment from "moment";
import "./NewOrder.css";

export default function NewOrder() {
  const [regNo, setRegNo] =useState("");
  const [make, setMake] =useState("");
  const [model, setModel] =useState("");
  const [year, setYear] = useState("");
  const [fuel, setFuel] = useState("");
  const [mileage, setMileage] =useState("");
  const [transmission, setTransmission] =useState("");
  const[date , setDate] = useState(new Date().toLocaleDateString());
  const inputRefRegNo =useRef();
  const inputRefMake =useRef();
  const inputModel =useRef();
  const inputYear =useRef();
  const inputFuel = useRef();
  const inputMileage =useRef();
  const inputTransmission =useRef();

  function setCarInfo() {

   setRegNo(inputRefRegNo.current.value.toUpperCase());
   setMake(inputRefMake.current.value.toUpperCase());
   setModel(inputModel.current.value.toUpperCase());
   setYear(inputYear.current.value.toUpperCase());
    setFuel(inputFuel.current.value.toUpperCase());
    setMileage(inputMileage.current.value.toUpperCase());
    setTransmission(inputTransmission.current.value.toUpperCase());
    

     inputRefRegNo.current.value = "";
      inputRefMake.current.value = "";
      inputModel.current.value = "";
      inputYear.current.value = "";
      inputFuel.current.value = "";
      inputMileage.current.value = "";
      inputTransmission.current.value = "";


   }
    function setCustomer() {
      setSubmitted(true);
    }

  return (
    <> 
    <div className="left-side" id="auth-inputs">
    <h2>Add Car Info</h2> 
<Input type="text" placeholder="Enter reg no"  ref={inputRefRegNo}/>
<Input type="text" placeholder="Enter car make" ref={inputRefMake}/>
<Input type="text" placeholder="Enter car model" ref={inputModel}/>
<Input type="text" placeholder="Enter car year" ref={inputYear}/>
<Input type="text" placeholder="Enter car fuel" ref={inputFuel} />
<Input type="text" placeholder="Enter car mileage" ref={inputMileage}/>
<Input type="text" placeholder="Enter car transmission" ref={inputTransmission}/>

<Button  onClick={setCarInfo}>Add Car</Button>
<h2>Customer Info</h2>
<Input type="text" placeholder="Enter customer name" />
<Input type="text" placeholder="Enter customer phone" />
<Input type="text" placeholder="Enter customer email" />
<Button onClick={setCustomer} >Add Customer</Button>
</div>
<div className="Right-side" id="auth-result"> 
<h2>{date}</h2>
<h2>Mechanic Name : Ivan Ivanov</h2>
<h2>Car Info data </h2>
<h3>{}</h3>
<h3> reg No : {regNo}</h3>
<h3> Make : {make}</h3>
<h3> Model : {model}</h3>
<h3> Year : {year}</h3>
<h3> Fuel : {fuel}</h3>
<h3> Mileage : {mileage}</h3>
<h3> Transmission : {transmission}</h3>
<h2>Customer Info</h2>
<h3> Name : </h3>
<h3> Phone : </h3>
<h3> Email : </h3>
<h2>Services Info</h2>
<h3> Task description : </h3>
<h3>Total Price : </h3>
</div> 

<div   id="auth-inputs">
   <ControlContainer>
        <div >
          <h3>Services Info</h3>
          <Input type="text" placeholder="Enter task" />
        </div>
        <p>
          <Input type="number" placeholder="Enter service price" />
        </p>
        <p>
          <Label>Image</Label>
          <Input type="file" accept="image/*" />
        </p>
        <Button >Save (ADD ORDER)</Button> 
   </ControlContainer>
</div>
<br/>
     </>
  );
}
