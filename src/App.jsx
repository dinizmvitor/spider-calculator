import './App.css'
import { useState } from 'react'

const App = () => {

    const [displayValue, setDisplayValue] = useState("")

    const handleClick = (e) => {   
        setDisplayValue(displayValue.concat(e.target.name))
    }

    const clear = () => {
        setDisplayValue("")
    }

    const bs = () => {
            setDisplayValue(displayValue.slice(0, -1))
    }

    const calculate = () => {
        try {
            setDisplayValue(eval(displayValue).toString())
        } catch (error) {
            setDisplayValue("Erro")
        }
    }

    return (
        <div className="calculator">
            <div className="display">
                <span className="display-value">{displayValue}</span>
            </div>
            <div className="buttons">
                <button name="AC" onClick={clear}>AC</button>
                <button name="BS" onClick={bs} className="spaced">BS</button>
                <button name="=" onClick={calculate}>=</button>
                <button name="7" onClick={handleClick}>7</button>
                <button name="8" onClick={handleClick}>8</button>
                <button name="9" onClick={handleClick}>9</button>
                <button name="/" onClick={handleClick}>/</button>
                <button name="4" onClick={handleClick}>4</button>
                <button name="5" onClick={handleClick}>5</button>
                <button name="6"onClick={handleClick}>6</button>
                <button name="*" onClick={handleClick}>*</button>
                <button name="1" onClick={handleClick}>1</button>
                <button name="2" onClick={handleClick}>2</button>
                <button name="3" onClick={handleClick}>3</button>
                <button name="-" onClick={handleClick}>-</button>
                <button name="0" onClick={handleClick}>0</button>
                <button name="." onClick={handleClick} className="spaced">.</button>
                <button name="+" onClick={handleClick}>+</button>

            </div>
        </div>  
    )
}

export default App