import React, { useState } from 'react';

function App() {
  const [backgroundColor, setBackgroundColor] = useState('white');

  const handleClick = () => {
    const randomColor = getRandomColor();
    setBackgroundColor(randomColor);
  };

  function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  return (
    <div style={{ backgroundColor: backgroundColor }}>
      <button onClick={handleClick}>Change Color</button>
    </div>
  );
}

export default App;
