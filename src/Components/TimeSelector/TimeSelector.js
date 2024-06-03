import React, { useState } from 'react';
import './TimeSelector.css';
const TimeSelector = () => {
    const [selectedTime, setSelectedTime] = useState(null);

  const times = [10, 20, 30, 40, 50]; 

    return (
      <div>
        <div className="time-selector">
          {
          times.map(time => (
          <div
            key={time}
            className={`time-option ${selectedTime === time ? 'selected' : ''}`}
            onClick={() => setSelectedTime(time)}>{time}s
          </div>          
        ))}    
        
        
        </div>
      <div> 
             
        <h2>Break Time: {selectedTime !== null ? 
        `${selectedTime}s` : 'None'}</h2>
       
       </div>
  </div>
    );
};

export default TimeSelector; 

