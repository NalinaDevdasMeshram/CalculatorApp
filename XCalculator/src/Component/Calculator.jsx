import Style from "./Calculator.module.css";
import { useState } from "react";
const Calculator = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(null);

  const handleClick = (value) => {
    setInput((prevState) => prevState + value);
  };
  const handleClear = () => {
    setInput("");
    setResult(null);
  };
  const handleCalculator = () => {
    try {
      if (input === "") {
        setResult("Error");
        return;
      }
      const evaluateResult = Function(`return(${input});`)();
      console.log(evaluateResult);
      console.log(isNaN);
      if (isNaN(evaluateResult)) {
        setResult("NaN");
      } else {
        setResult(evaluateResult);
      }
    } catch (error) {
      setResult("Error");
    }
  };
  return (
    <div className={Style.Calculator}>
      <h1>React Calculator</h1>
      <input
        type="text"
        className={Style.inputBox}
        value={input}
        placeholder="Enter Number"
        readOnly
      />
      <div>
        <h2>{result !== null ? result : ""}</h2>
      </div>
      <div className={Style.btn}>
        <button className={Style.btntext} onClick={() => handleClick("7")}>
          7
        </button>
        <button className={Style.btntext} onClick={() => handleClick("8")}>
          8
        </button>
        <button className={Style.btntext} onClick={() => handleClick("9")}>
          9
        </button>
        <button className={Style.btntext} onClick={() => handleClick("+")}>
          +
        </button>
      </div>
      <div className={Style.btn}>
        <button className={Style.btntext} onClick={() => handleClick("6")}>
          6
        </button>
        <button className={Style.btntext} onClick={() => handleClick("5")}>
          5
        </button>
        <button className={Style.btntext} onClick={() => handleClick("4")}>
          4
        </button>
        <button className={Style.btntext} onClick={() => handleClick("-")}>
          -
        </button>
      </div>
      <div className={Style.btn}>
        <button className={Style.btntext} onClick={() => handleClick("3")}>
          3
        </button>
        <button className={Style.btntext} onClick={() => handleClick("2")}>
          2
        </button>
        <button className={Style.btntext} onClick={() => handleClick("1")}>
          1
        </button>
        <button className={Style.btntext} onClick={() => handleClick("*")}>
          *
        </button>
      </div>
      <div className={Style.btn}>
        <button className={Style.btntext} onClick={handleClear}>
          C
        </button>
        <button className={Style.btntext} onClick={() => handleClick("0")}>
          0
        </button>
        <button className={Style.btntext} onClick={handleCalculator}>
          =
        </button>
        <button className={Style.btntext} onClick={() => handleClick("/")}>
          /
        </button>
      </div>
    </div>
  );
};
export default Calculator;
