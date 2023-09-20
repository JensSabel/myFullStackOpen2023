import { useState } from 'react'

const Header = props => <h1>{props.text}</h1>
const Button = props => <button onClick={props.handleClick}>{props.text}</button>
const Statistics = props => <p>{props.text}: {props.score}</p>

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  
  const HandlePositive = () => setGood(good+1)
  const HandleNeutral = () => setNeutral(neutral+1)
  const HandleBad = () => setBad(bad+1)
  const total = good + neutral + bad
  const average = (good - bad)/total
  const positive = good/total * 100 + "%"

  return (
    <div>
      <div>
        <Header text="Give Feedback"/>
        <Button handleClick={HandlePositive} text="Good"/>
        <Button handleClick={HandleNeutral} text="Neutral"/>
        <Button handleClick={HandleBad} text="Bad"/>
      </div>
      <div>
        <Header text="Statistics"/>
        <Statistics text="Good" score={good}/>
        <Statistics text="Neutral" score={neutral}/>
        <Statistics text="Bad" score={bad}/>
        <Statistics text="All" score={total}/>
        <Statistics text="Average" score={average}/>
        <Statistics text="Positive" score={positive}/>
      </div>
    </div>
  )
}

export default App
