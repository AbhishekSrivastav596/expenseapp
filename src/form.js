import React, { useState, useEffect } from "react";

function Form() {
  const [formdata, setformdata] = useState({
    price: "",
    date: "",
    title: "",
    category: "",
  });

  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("data") || "[]");
    setTableData(savedData);
  }, []);

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

    prevdata.push(formdata);
    localStorage.setItem("data", JSON.stringify(prevdata));

    setTableData(prevdata); 

    setformdata({
      price: "",
      date: "",
      title: "",
      category: "",
    });
    alert("Data is successfully saved in local storage");

    
    
    
  };

  return (
<div className="flex flex-col items-center p-6 bg-gray-50 min-h-screen">
  <form
    className="w-full max-w-md flex flex-col justify-center items-center border border-gray-300 p-8 rounded-lg shadow-xl bg-gray-700 text-white mb-8"
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
      onChange={setPrice}
      className="w-full p-3 mb-4 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
    />

    <label htmlFor="date" className="w-full mb-2 text-gray-300 font-semibold">
      Date:
    </label>
    <input
      type="date"
      className="w-full p-3 mb-4 border border-gray-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
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

    <button
      type="submit"
      className="w-1/4 p-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition"
    >
      Submit
    </button>
  </form>

  <table className="table-auto border-collapse border border-gray-300 w-full max-w-2xl text-left mb-8 ">
    <thead>
      <tr className="bg-gray-700">
        <th className="border border-gray-300 px-6 py-4 text-lg font-medium text-white">Price</th>
        <th className="border border-gray-300 px-6 py-4 text-lg font-medium text-white">Date</th>
        <th className="border border-gray-300 px-6 py-4 text-lg font-medium text-white">Title</th>
        <th className="border border-gray-300 px-6 py-4 text-lg font-medium text-white">Category</th>
      </tr>
    </thead>
    <tbody>
      {tableData.length > 0 ? (
        tableData.map((item, index) => (
          <tr key={index} className="hover:bg-blue-100 transition">
            <td className="border border-gray-300 px-6 py-4 text-gray-700">{item.price}</td>
            <td className="border border-gray-300 px-6 py-4 text-gray-700">{item.date}</td>
            <td className="border border-gray-300 px-6 py-4 text-gray-700">{item.title}</td>
            <td className="border border-gray-300 px-6 py-4 text-gray-700">{item.category}</td>
          </tr>
        ))
      ) : (
        <tr>
          <td
            colSpan="4"
            className="border border-gray-300 px-6 py-4 text-center text-gray-700 font-medium"
          >
            No data available
          </td>
        </tr>
      )}
    </tbody>
  </table>
</div>
  )
}

export default Form;
