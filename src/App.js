import React, {useState} from 'react'
import './style.css'

export default function App() {
  const [temperatureValue, setTemperatureValue] = useState(10)
  const [temperatureColor, setTemperatureColor] = useState('cold')
  function add(){
    if(temperatureValue === 30) return;
    const newTemperature = temperatureValue + 1;
    
    if(newTemperature >= 15){
      setTemperatureColor('hot');
    }

    setTemperatureValue(newTemperature)
  }
  function minus(){
    if(temperatureValue === 0) return;
    const newTemperature = temperatureValue - 1;
    

    

    if (newTemperature <= 14){
      
      setTemperatureColor('cold')
    }

    setTemperatureValue(newTemperature)
    
  }

  return (
    <div className='app-container'>
     <div className="temperature-display-container">
      <div className={`temperature-display ${temperatureColor}`}>{temperatureValue}°c</div>
     </div>
     <div className='button-container'>
    <button onClick={add}>+</button>
    <button onClick={minus}>-</button>
     </div>
    </div>
  )
}
