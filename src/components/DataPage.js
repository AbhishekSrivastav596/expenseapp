import React, { useState, useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useNavigate,Navigate } from 'react-router-dom';

function DataPage({setValue}) {
  const Navigate = useNavigate();
  const [tableData, setTableData] = useState(JSON.parse(localStorage.getItem('data') || '[]'));
  

  

  const handleDelete = (e) => {
    const id = parseInt(e.target.id, 10);
    console.log(id);
    const updatedData = tableData.filter((_, index) => index !== id);
    setTableData(updatedData);
    // console.log(updatedData);
    localStorage.setItem("data", JSON.stringify(updatedData));
    toast.success("Data has been successfully deleted!")
    
  };

  const handleEdit = (index) => { 
    setValue(index);
    console.log(index);
     Navigate('/');
     
  };
  

  return (
    <div className="flex flex-col items-center p-6 bg-gray-50 min-h-screen">
      <h3 className="text-2xl font-bold text-blue-600 mb-6">View Your Expenses</h3>
      <table className="table-auto border-collapse border border-gray-300 w-full max-w-2xl text-left mb-8">
        <thead>
          <tr className="bg-gray-700">
            <th className="border border-gray-300 px-6 py-4 text-lg font-medium text-white">Price</th>
            <th className="border border-gray-300 px-6 py-4 text-lg font-medium text-white">Date</th>
            <th className="border border-gray-300 px-6 py-4 text-lg font-medium text-white">Title</th>
            <th className="border border-gray-300 px-6 py-4 text-lg font-medium text-white">Category</th>
            <th className="border border-gray-300 px-6 py-4 text-lg font-medium text-white">Delete</th>
            <th className="border border-gray-300 px-6 py-4 text-lg font-medium text-white">Edit</th>
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
        <td className="border border-gray-300 px-6 py-4 text-center">
          <button
            id={index} 
            onClick={handleDelete} 
            className="bg-red-500 text-white font-semibold px-4 py-2 rounded-md hover:bg-red-600 transition"
          >
            Delete
          </button>
       
          
        </td>
        <td className="border border-gray-300 px-6 py-4 text-center"><button className="bg-green-500 text-white font-semibold px-4 py-2 rounded-md hover:bg-blue-500 transition" onClick={()=>handleEdit(index)} >Edit</button></td>
      </tr>
    ))
  ) : (
    <tr>
      <td
        colSpan="5"
        className="border border-gray-300 px-6 py-4 text-center text-gray-700 font-medium"
      >
        No data available
      </td>
    </tr>
  )}
</tbody>

      </table>
    </div>
  );
}

export default DataPage;
