import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => setRecords(data))
      .catch(err => console.log(err));
  }, []);

  return (
    <>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {records.map((item) => (
          <div key={item.id} style={{ border: '1px solid #ddd', margin: '10px', padding: '10px', width: '200px' }}>
            <h3>{item.title}</h3>
            <img src={item.image} alt={item.title} style={{ width: '100%' }} />
            <p>{item.price}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
