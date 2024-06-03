import React, { useState } from 'react';
import './TimeSelector.css';
const TimeSelector = () => {
    const [selectedTime, setSelectedTime] = useState(null);

  const times = [10, 20, 30, 40, 50]; 

    return (
        <div className="time-selector">
          {
          times.map(time => (
          <div
            key={time}
            className={`time-option ${selectedTime === time ? 'selected' : ''}`}
            onClick={() => setSelectedTime(time)}>{time}s
          </div>          
        ))}
                
        {
        selectedTime !== null && (
          <div> 
             Selected Time: {selectedTime}s
          </div>)
          }
      </div>
    );
};

export default TimeSelector; 

