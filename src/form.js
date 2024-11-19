import React from 'react'
import { useState } from 'react';

function Form() {
  const [formdata, setformdata] = useState({
    price: "",
    date: "",
    title: "",
    category: ""
  });
  const setPrice = (e) => {
    setformdata({ ...formdata, price: e.target.value });
  }
  const getDate = (e) => {
    setformdata({ ...formdata, date: e.target.value });

  }
  const getTitle = (e) => {
    setformdata({ ...formdata, title: e.target.value });

  }
  const getCategory = (e) => {
    setformdata({ ...formdata, category: e.target.value });
  }

  const saveData = (e) => {
    e.preventDefault();
    console.log(formdata);
    let prevdata = JSON.parse(localStorage.getItem("data") || "[]");
  
    prevdata.push(formdata);
    localStorage.setItem('data', JSON.stringify(prevdata));
    alert('data is successfully saved in local storage');
  }
  return (
    <>
      <form className="h-full w-full flex flex-col justify-center items-center border border-black p-6 rounded-md shadow-lg bg-blue-100" onSubmit={saveData}>
        <h2 className="text-xl font-bold mb-4">Your Expenses</h2>

        <label htmlFor="price" className="w-full mb-2">Price:</label>
        <input
          type="number"
          id="price"
          placeholder="Enter the price"
          onChange={setPrice}
          className="w-full p-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        <label htmlFor="date" className="w-full mb-2">Date:</label>
        <input
          type="date"
          className="w-full p-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" onChange={getDate}
        />

        <label htmlFor="title" className="w-full mb-2">Title:</label>
        <input
          type="text"
          id="title"
          placeholder="Enter the title"
          className="w-full p-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" onChange={getTitle}
        />

        <label htmlFor="category" className="w-full mb-2">Category:</label>
        <select onChange={getCategory}
          id="options"
          name="options"
          className="w-full p-2 mb-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <option value="" disabled selected hidden>
            Choose an option
          </option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>

        <button
          type="submit"
          className="w-1/4 p-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition"
        >
          Submit
        </button>
      </form>
    </>
  )
}

export default Form
