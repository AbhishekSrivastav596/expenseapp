import React from 'react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import Card from './Card';
import Table from './Table';

function DataPage({ setValue, tableData, setTableData, setformdata, showData, setshowData }) {
  const Navigate = useNavigate();

  const handleDelete = (index) => {
    const updatedData = tableData.filter((_, i) => i !== index);
    setTableData(updatedData);
    setformdata(updatedData);
    toast.success("Data has been successfully deleted!");
    setValue(-1); // Reset the value to clear input
  };

  const handleEdit = (index) => {
    setValue(index); // Set the value to the index being edited
    Navigate('/');
  };

  const toggleView = () => {
    setshowData((prevShowData) => !prevShowData); // Toggle showData state
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-2xl font-bold text-blue-600 mb-4 text-center">Manage Your Expenses</h1>
      
     
      <div className="flex justify-center mb-6">
        <button
          onClick={toggleView}
          className="bg-blue-500 text-white px-6 py-2 rounded-md font-medium hover:bg-blue-600 transition"
        >
          {showData ? 'Switch to Table View' : 'Switch to Card View'}
        </button>
      </div>

      {/* Display Card or Table based on showData */}
      {showData ? (
        <Card
          tableData={tableData}
          delete_expense={handleDelete}
          edit_expense={handleEdit}
        />
      ) : (
        <Table
          tableData={tableData}
          delete_expense={handleDelete}
          edit_expense={handleEdit}
        />
      )}
    </div>
  );
}

export default DataPage;
