import React, { useState } from 'react';

const UseStateCounter = () => {
  const [value, setValue] = useState(0)

  const decreaseNumber = () => {
    return setValue(value - 1)
  }
  const resetNumber = () => {
    return setValue(0)
  }
  return (
    <>
      <section style={{margin:'4rem 0'}}>
        <h2>reqular counter</h2>
        <h1>{value}</h1>
        <button className="btn" onClick={decreaseNumber}>decrease</button>
        <button className="btn" onClick={resetNumber}>reset</button>
        <button className="btn" onClick={()=> {setValue(value + 1)}}>increase</button>
      </section>
    </>
  );
};

export default UseStateCounter;
