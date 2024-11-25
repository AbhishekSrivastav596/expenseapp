import React, { useState, useEffect } from "react";
import {toast} from "react-hot-toast";

function Form({value}) {
  const [formdata, setformdata] = useState({
    price: "",
    date: "",
    title: "",
    category: "",
  });
  console.log("form page par index of the row",value);
  const [tableData, setTableData] = useState( JSON.parse(localStorage.getItem("data") || "[]"));
  useEffect(()=>{
    if(value > -1){
    const prefilled = JSON.parse(localStorage.getItem("data") || "[]");
    console.log(prefilled[value]);
    if(prefilled[value]!==undefined){
      setformdata(prefilled[value]);
    }
  }
  }, [value])
  
  
  const setPrice = (e) => {
    setformdata({ ...formdata, price: e.target.value });
  };
  const getDate = (e) => {
    setformdata({ ...formdata, date: e.target.value });
  };
  const getTitle = (e) => {
    setformdata({ ...formdata, title: e.target.value });
  };
  const getCategory = (e) => {
    setformdata({ ...formdata, category: e.target.value });
  };

  const saveData = (e) => {
    e.preventDefault();
    let prevdata = JSON.parse(localStorage.getItem("data") || "[]");
    if(value > -1){
      prevdata[value] = formdata;
    }
    else{
      prevdata.push(formdata);
    }
    localStorage.setItem("data", JSON.stringify(prevdata));

    setTableData(prevdata); 

    setformdata({
      price: "",
      date: "",
      title: "",
      category: "",
    });
    toast.success("Your data has been saved successfully!")
  };

  
  


  return (
    
<div className="flex flex-col items-center p-2 bg-gray-50 min-h-screen">
  <form
    className="w-full max-w-md flex flex-col justify-center items-center border border-gray-300 p-8 rounded-lg shadow-xl bg-gray-700 text-white "
    onSubmit={saveData}
  >
    <h3 className="text-2xl font-bold text-blue-400 mb-6">Your Expenses</h3>
    <label htmlFor="price" className="w-full mb-2 text-gray-300 font-semibold">
      Price:
    </label>
    <input
      type="number"
      id="price"
      placeholder="Enter the price"
      value={formdata.price}
      onChange={setPrice} required
      className="w-full p-3 mb-4 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
    />

    <label htmlFor="date" className="w-full mb-2 text-gray-300 font-semibold">
      Date:
    </label>
    <input
      type="date"
      className="w-full p-3 mb-4 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
      required
      value={formdata.date}
      onChange={getDate}
    />

    <label htmlFor="title" className="w-full mb-2 text-gray-300 font-semibold">
      Title:
    </label>
    <input
      type="text"
      id="title"
      placeholder="Enter the title"
      className="w-full p-3 mb-4 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
      value={formdata.title}
      required
      onChange={getTitle} 
    />

    <label htmlFor="category" className="w-full mb-2 text-gray-300 font-semibold">
      Category:
    </label>
    <select
      onChange={getCategory}
      id="options"
      name="options"
      value={formdata.category}
      className="w-full p-3 mb-4 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
    >
      <option value="" disabled selected hidden>
        Choose an option
      </option>
      <option value="Food">Food</option>
      <option value="Movie">Movie</option>
      <option value="Shopping">Shopping</option>
      <option value="Personal">Personal</option>

    </select>
    
  <button type="submit" className="w-1/4 p-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition" >Submit</button>
      
     
  </form>

</div>
  )
}

export default Form;
