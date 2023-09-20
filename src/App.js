import './App.css';
import { useEffect, useState } from "react";
import Table from "./Components/Table"
import Pagenation from './Components/Pagenation';
function App() {
  const [data, setData] = useState([])
  const [currentPage, setCurrentPage] = useState([])
  useEffect(() => {
    (async () => {
      await fetch("https://650b1c62dfd73d1fab099a7d.mockapi.io/getTransactions/Transactions")
        .then(response => response.json())
        .then(json => setData(json))
    })()
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h2>UBank transections</h2>
        <Table data={currentPage} />
        <Pagenation data={data} handleCurrentPage={setCurrentPage} currentPage={currentPage} />
      </header>
    </div>
  );
}

export default App;
