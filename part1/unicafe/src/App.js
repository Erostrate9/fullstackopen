import { useState } from 'react'
import Button from './Button'
import Statistics from './Statistics'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const increaseByOne = (value, setValue) => setValue(value+1);

  return (
    <div>
      <div>
        <h1>give feedback</h1>
        <Button onClick={()=>increaseByOne(good, setGood)} text="good"/>
        <Button onClick={()=>increaseByOne(neutral, setNeutral)} text="neutral"/>
        <Button onClick={()=>increaseByOne(bad, setBad)} text="bad"/>
      </div>

      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App