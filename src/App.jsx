
import { useState,useRef } from "react";

const App = () => {
  const timerRef= useRef(null);
  const [time,setTime] = useState(0);
  const[isRunning,setIsRunning] = useState(false);
  const toggleTimer = () => {
    if (isRunning){
      //clear interval to stop the timer
      clearInterval(timerRef.current)
      timerRef.current = null;
    }else{
      //Start timer
      timerRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000//means it is 1 second
      );
    }
    setIsRunning(!isRunning);
  };
  const resetTimer = () => {
    clearInterval(timerRef.current);
    setIsRunning(false);
    setTime(0);
    timerRef.current = null;
  }
  return (  
<div className="max-w-md mx-auto mt-10 p-6 bg-gray-100 rounded-lg shadow-lg text-center">
  <h2 className="text-4xl font-semibold mt-4">Timer: {time}</h2>
  <button 
  onClick = {toggleTimer} className="mt-3 bg-green-500 text-white px-4 py-2 rounded hover: bg-green-600 mr-3">
    {isRunning ? 'Pause' : 'start'}
  </button>
  <button 
  onClick = {resetTimer} className="mt-3 bg-red-500 text-white px-4 py-2 rounded hover: bg-green-600">
    Reset
  </button>
</div>
  );
}
 
export default App;