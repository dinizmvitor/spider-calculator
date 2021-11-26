import './Calculator.css'
import { useState } from 'react'

const Calculator = () => {
    const [result, setResult] = useState(0)
    const [topResult, setTopResult] = useState(0)
    const [accumulator, setAccumulator] = useState(0)
    const [operator, setOperator] = useState("")

    const num = (e) => {
        let numButton = e.target.name

        if(result === 0) {
            setResult(numButton)
        } else {
            setResult(result+numButton)
        }
    }

    const percentage = () => {
        setResult(result / 100)
    }

    const mathOp = (e) => {
        let opButton = e.target.name

        setOperator(opButton)
        setAccumulator(result)
        setResult(0)
    }

    const clear = () => {
        setResult(0)
        setTopResult(0)
        setAccumulator(0)
    }

    const bs = () => {
        setResult(result.toString().slice(0, -1))
    }

    const calculate = () => {
        if (operator === '+'){
            setResult(parseFloat(accumulator) + parseFloat(result))
            setTopResult(parseFloat(accumulator) + parseFloat(result))
        } else if (operator === '-') {
            setResult(parseFloat(accumulator) - parseFloat(result))
            setTopResult(parseFloat(accumulator) - parseFloat(result))
        } else if (operator === '*') {
            setResult(parseFloat(accumulator) * parseFloat(result))
            setTopResult(parseFloat(accumulator) * parseFloat(result))
        } else if (operator === '/') {
            setResult(parseFloat(accumulator) / parseFloat(result))
            setTopResult(parseFloat(accumulator) / parseFloat(result))
        }
    }

    return (
        <div className="calculator">
            <div className="display">
                <div className="top-result">
                    <span>{topResult}</span>
                </div>
                <div className="result">
                    <span>{result}</span>
                </div>
                
            </div>
            <div className="buttons">
                <button name="AC" onClick={clear}>AC</button>
                <button name="%" onClick={percentage}>%</button>
                <button name="BS" onClick={bs}>BS</button>
                <button name="=" onClick={calculate}>=</button>
                <button name="7" onClick={num}>7</button>
                <button name="8" onClick={num}>8</button>
                <button name="9" onClick={num}>9</button>
                <button name="/" onClick={mathOp}>/</button>
                <button name="4" onClick={num}>4</button>
                <button name="5" onClick={num}>5</button>
                <button name="6" onClick={num}>6</button>
                <button name="*" onClick={mathOp}>*</button>
                <button name="1" onClick={num}>1</button>
                <button name="2" onClick={num}>2</button>
                <button name="3" onClick={num}>3</button>
                <button name="-" onClick={mathOp}>-</button>
                <button name="0" className="spaced" onClick={num}>0</button>
                <button name="." onClick={num}>.</button>
                <button name="+" onClick={mathOp}>+</button>
            </div>
        </div>
    )
}

export default Calculator