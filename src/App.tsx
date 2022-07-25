import React from 'react';
import './App.css';
import { useState } from 'react';
import '../src/css/header.css'
import '../src/css/ad-designer.css'

function App() {
  const [adDesignerFlavor, setPickFlavor] = useState('');

  const pickedFlavor1 = () => {
    setPickFlavor('Vanilla');
  }

  const pickedFlavor2 = () => {
    setPickFlavor('Chocolate');
  }

  const pickedFlavor3 = () => {
    setPickFlavor('Strawberry');
  }

  const flavorButton = () => {
    if (adDesignerFlavor === 'Vanilla') {
      return 'Vanilla'
    } else if (adDesignerFlavor === 'Chocolate') {
      return 'Chocolate'
    } else {
      return 
    }
  }

  return (
    <>
      <div className="App">
        <header className="App-header">
          <h1>Ice Cream Wars</h1>
        </header>
      </div>

      <div className='ad-container'>
        <h1 className='ad-designer-title'>
          Ad Designer
        </h1>
        <button>

        </button>
      </div>


    </>
  );
}

export default App;
