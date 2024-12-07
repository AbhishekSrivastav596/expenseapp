import React from 'react';

const Card = ({ tableData, edit_expense, delete_expense}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
      {tableData.length > 0 ? (
        tableData.map((item, index) => (
          <div className="relative flex flex-col p-4 border-2 border-blue-300 rounded-lg shadow-md">
            <h2 className="text-xl text-gray-800">Title: {item.title}</h2>
            <p className="text-xl text-gray-800">Category: {item.category}</p>
            <p className="text-xl text-gray-800">Date: {item.date}</p>
            <p className="text-xl text-gray-800">Price: {item.price}</p>
            <div className="flex space-x-2 mt-4">
              <button
              id={index}
                className="bg-red-500 text-white font-semibold px-4 py-2 rounded-md hover:bg-red-600 transition"
                onClick={() => delete_expense(index)}
              >
                Delete
              </button>

              <button
                className="bg-green-500 text-white font-semibold px-4 py-2 rounded-md hover:bg-green-600 transition"
                onClick={() => edit_expense(index)}
              >
                Edit
              </button>
            </div>
          </div>
        ))
      ) : (
        <div className="text-center text-gray-700 font-medium">
          No data available
        </div>
      )}
    </div>
  );
};

export default Card;
