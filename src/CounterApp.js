import PropTypes from "prop-types"
import React, {useState} from "react";

const CounterApp = ({ value = 0 }) => {
  const [counter, setCounter] = useState(0)

  const handleAdd = () => {
    // setCounter(counter +1)
    setCounter( (c) => c+1)
  }

  const handleRest = () => {
     setCounter((c) => c-1)
  }

  const reset = () => {
    setCounter(value)
  }

  return (
    <><h1>CounterApp</h1>
      <h2> {counter} </h2>
      <button onClick={handleAdd}>+1</button>
      <button onClick={reset}>Reset</button>
      <button onClick={handleRest}>-1</button>

    </>
  )

}

CounterApp.propTypes = {
  value: PropTypes.number.isRequired
}




export default CounterApp

