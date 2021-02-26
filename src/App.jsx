import React, { useState, useEffect } from 'react';
// import InputFilter from './components/InputFilter';
import 'bootstrap/dist/css/bootstrap.min.css';
import TableUsers from './components/TableUsers';

// import bitton from 'bootstrap';

function App() {
  console.log('App was rendered');

  const [filterInputValue, SetfilterInputValue] = useState('');

  // console.log(usersList);
  // console.log('is loading value: ', isLoading);

  return (
    <div className="App">
      <div className="container">
        {/* <InputFilter SetfilterInputValue={SetfilterInputValue} /> */}
        <TableUsers filterInputValue={filterInputValue} />
      </div>
    </div>
  );
}

export default App;
