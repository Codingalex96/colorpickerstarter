import { useState } from 'react';
import './index.css'; 

const Color = ({ color, selectedColor, setSelectedColor }) => {
  
  const className = color === selectedColor ? `color-box selected` : 'color-box';

  return (
    <div
      className={className}
      onClick={() => setSelectedColor(color)}
      style={{ backgroundColor: color }} 
    ></div>
  );
};

const App = () => {
  const [selectedColor, setSelectedColor] = useState(''); 

  return (
    <div id="container">
      <div id="navbar">
        <div>Currently selected: </div>
        <div>{selectedColor || 'None'}</div> 
      </div>
      <div id="colors-list">
        
        <Color color="yellow" selectedColor={selectedColor} setSelectedColor={setSelectedColor} />
        <Color color="green" selectedColor={selectedColor} setSelectedColor={setSelectedColor} />
        <Color color="black" selectedColor={selectedColor} setSelectedColor={setSelectedColor} />
      </div>
    </div>
  );
};

export default App