import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css';
import Form from './components/form';
import DataPage from './components/DataPage';

function App() {
  

  return (
    <>
    <Router>
      <div>
        {/* Navbar */}
        <nav className="bg-gray-800 text-white p-4">
          <ul className="flex space-x-6">
            <li>
              <Link to="/" className="text-blue-400 hover:text-white">Home</Link>
            </li>
            <li>
              <Link to="/view-data" className="text-blue-400 hover:text-white">View Data</Link>
            </li>
          </ul>
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/" element={<Form />} />
          <Route path="/view-data" element={<DataPage />} />
        </Routes>
      </div>
    </Router>

    </>
  );
}

export default App;
