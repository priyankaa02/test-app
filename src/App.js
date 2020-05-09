import React from 'react';
import './App.css';

function App() {
  let click = 0;
  const leftClick = () => {
    window.scrollBy({
      left: click - 1200,
      behaviour: 'smooth'
    })
  }
  const rightClick = () => {
    window.scrollBy({
      left: click + 1200,
      behaviour: 'smooth'
   })
  }
  return (
    <div>
      <div className="img-back"/>
      <div onClick={leftClick}>
        <i className="fa fa-arrow-left left-arrow fa-3x"/>
      </div>
      <div onClick={rightClick} >
        <i className="fa fa-arrow-right right-arrow fa-3x"/>
      </div>
    </div>
  );
}

export default App;
