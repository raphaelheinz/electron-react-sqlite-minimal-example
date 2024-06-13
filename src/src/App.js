// src/src/App.js
import React, { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    if (window.api && window.api.loadTableData) {
      window.api.loadTableData().then((rows) => {
        setData(rows);
      }).catch((err) => console.error(err));
    } else {
      console.error('API not loaded');
    }
  }, []);

  return (
    <div className="App">
      <h1>SQLite Data</h1>
      <ul>
        {data.map((row, index) => (
          <li key={index}>{JSON.stringify(row)}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
