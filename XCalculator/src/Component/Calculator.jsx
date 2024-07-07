/* eslint-disable react/prop-types */
//  import Style from './Calculator.module.css'

import { useState } from "react";


const Calculator =()=>{
     const[input, setInput] = useState('');
     const [ result, setResult] = useState(null);

     const handleClick =(value)=>{
        if(result != null && !NaN(value)){
           setInput(value);
           setResult(null)
        }else{
            setInput((prevState)=>prevState + value)
        }
        
     }
     const handleClear = ()=>{
        setInput('')
        setResult(null)
     }
     const handleCalculator =()=>{
        try{
           setInput((prev)=>{
             const result = eval(prev);
            setResult(result)
            setInput(String(result))
           })
        }
        catch{
           setInput(NaN)
           setResult(null)  
        }
     }
 return(
        <div>
            <h1>React Calculator</h1>
            <input type="text" value={input}/>
            <div>
                <button onClick={()=>handleClick('7')}>7</button>
                <button onClick={()=>handleClick('8')}>8</button>
                <button onClick={()=>handleClick('9')}>9</button>
                <button onClick={()=>handleClick('+')}>+</button>
            </div>
            <div>
                <button onClick={()=>handleClick('6')}>6</button>
                <button onClick={()=>handleClick('5')}>5</button>
                <button onClick={()=>handleClick('4')}>4</button>
                <button onClick={()=>handleClick('-')}>-</button>
            </div>
            <div>
                <button onClick={()=>handleClick('3')}>3</button>
                <button onClick={()=>handleClick('2')}>2</button>
                <button onClick={()=>handleClick('1')}>1</button>
                <button onClick={()=>handleClick('*')}>*</button>
            </div>
            <div>
                <button onClick={handleClear}>c</button>
                <button onClick={()=>handleClick('0')}>0</button>
                <button onClick={handleCalculator}>=</button>
                <button onClick={()=>handleClick('/')}>/</button>
            </div>
        </div>
    )
}
export default Calculator;