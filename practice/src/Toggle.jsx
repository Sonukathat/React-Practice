import { useState } from 'react';
import './Toggle.css'
import { GoHeartFill } from "react-icons/go";

function ToggleBtn() {

    const[isOn, setOn] = useState(true);

    function handleDiv1(){
        setOn(!isOn);
    }

    return (
      <>
         <h1><GoHeartFill /></h1>
         <div className={`div1 ${isOn ? "red-bg" : "green-bg"}`} onClick={handleDiv1}>
            <div className={isOn ? "on" : "off"}>{isOn ? "On" : "Off"}</div>
        </div>
      </>
    );
  }
  
  export default ToggleBtn;
  