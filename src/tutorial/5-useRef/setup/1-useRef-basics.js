import React, { useEffect, useRef } from 'react';

// preserves value
// DOES NOT trigger re-render
// target DOM nodes/elements

const UseRefBasics = () => {
  const refContainer = useRef(null);
  const divContainer = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(refContainer.current.value)
    console.log(divContainer.current)
  }
  //console.log(refContainer)

  useEffect(()=>{
    // re-render focus
    console.log(refContainer.current);
    refContainer.current.focus();
  })

  return ( 
    <>
    <form className="form" onClick={handleSubmit}>
      <div>
        <input type="text" ref={refContainer}/>
        <button type="submit" className="btn">submit</button>
      </div>     
    </form>
    <div ref={divContainer}>hello world</div>
    </>
  );
};

export default UseRefBasics;
