/* eslint-disable react/prop-types */


const Button = ({onClick}) => {
  const buttons = ['7', '8', '9', '+', '4', '5', '6', '-', '1', '2', '3', '*', 'C', '0', '=', '/'];

    return(
        <div >
            <div>
                {buttons.map((btn, index)=>{
                 <button key={index} onClick={()=>onClick(btn)}>{btn}</button>
                })}
            </div>
        </div>
    )

 }
 
 export default Button
