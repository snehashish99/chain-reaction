import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [matrix, setMatrix] = useState(
    [
      [{color: 'red', count: 0}, {color: 'red', count: 0}, {color: 'red', count: 0}],
      [{color: 'red', count: 0}, {color: 'red', count: 0}, {color: 'red', count: 0}],
      [{color: 'red', count: 0}, {color: 'red', count: 0}, {color: 'red', count: 0}]
    ]
  );

  return (
    <div>
      <div className='container'>
        <table className='table background-primary'>
          <tbody>           
          {matrix.map((row, idx) => (
            <tr key={idx}>
              {row.map((row2, idx) => (
                <td key={idx}>{row2.color}, {row2.count}</td>
              ))}
              </tr>
          ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
