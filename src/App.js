import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, BrowserRouter } from 'react-router-dom';
import './App.css';
import Form from './components/Form';
import DataPage from './components/DataPage';
import {Toaster} from 'react-hot-toast';

function App() {

  const [value,setvalue] = useState(-1);
  // console.log("value",value);
  // console.log("setvalue", setvalue);
  return (
    <>
    <Router>
      <div>
       <Toaster position="top-center" />
      <nav className="bg-gray-800 text-white p-4 sticky top-0">
          <div className="flex justify-between items-center"> 
        <div className="text-lg font-bold">
          Expensify
        </div>
        <ul className="flex space-x-6">
          <li>
            <Link to="/" className="text-blue-400 hover:text-white">Home</Link>
          </li>
          <li>
            <Link to="/view-data" className="text-blue-400 hover:text-white">View Data</Link>
          </li>
          </ul>
        </div>
      </nav>       
        <Routes>
          <Route path="/" element={<Form value={value}/>}/>
          <Route path="/view-data" element={<DataPage setValue={setvalue}/>} />
        </Routes>
      </div>
    </Router>

    </>
  );
}

export default App;
