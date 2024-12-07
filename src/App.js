import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link, BrowserRouter, useNavigate, Navigate } from 'react-router-dom';
import './App.css';
import Form from './components/Form';
import DataPage from './components/DataPage';
import Card from './components/Card'
import { Toaster } from 'react-hot-toast';
import {getExpensesFromBackend, setExpensesInBackend} from './services/backend'
 
function App() {
  const [value, setvalue] = useState(-1);
  const [tableData, setTableData] = useState([]);
  const [formdata, setformdata] = useState({
    price: "",
    date: "",
    title: "",
    category: "",
  });
  const [showData,setshowData] = useState(true);
  const prevdata = [...tableData];   //removing dependency of localStorage

  (useEffect(() => {
   const prefilled = prevdata;
    if (value > -1) {
      console.log("prefilled", prefilled);
      console.log("prevdata", prevdata);
      console.log(prefilled[value]);
      if (prefilled[value] !== undefined) {
        setformdata(prefilled[value]);
      }
    }
  },[value]))

  useEffect(() => {
    getExpensesFromBackend().then(formdata => setTableData(formdata));
  }, []);
  
  useEffect(() => {
    setExpensesInBackend(tableData).then(() => console.log("Saved expenses successfully!"));
  }, [tableData]);
 

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
            <Route path="/" element={<Form value={value} setValue={setvalue} tableData={tableData} setTableData={setTableData} prevdata={prevdata} formdata={formdata} setformdata={setformdata} />} />
            <Route
  path="/view-data"
  element={
    <DataPage
      setValue={setvalue}
      tableData={tableData}
      setTableData={setTableData}
      setformdata={setformdata}
      showData={showData}
      setshowData={setshowData} 
    />
  }
/>
          </Routes>
        </div>
      </Router>

    </>
  );
}

export default App;
