import { useState } from 'react'

const Header = props => <h1>{props.text}</h1>
const Button = props => <button onClick={props.handleClick}>{props.text}</button>
//Components separated as per instructed in Exercise 1.10
const StatisticsLine = props => <p>{props.text}: {props.score}</p>
const Statistics = (props) => {
  const good = props.good
  const neutral = props.neutral
  const bad = props.bad 

  const total = good + neutral + bad
  if (total == 0) {
    return(
      <p>No feedback given!</p>
    )
  }

  const average = (good - bad)/total
  const positive = good/total * 100 + "%"

  return (
    <div>
      <StatisticsLine text="Good" score={good}/>
      <StatisticsLine text="Neutral" score={neutral}/>
      <StatisticsLine text="Bad" score={bad}/>
      <StatisticsLine text="All" score={total}/>
      <StatisticsLine text="Average" score={average}/>
      <StatisticsLine text="Positive" score={positive}/>
    </div>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  
  const HandlePositive = () => setGood(good+1)
  const HandleNeutral = () => setNeutral(neutral+1)
  const HandleBad = () => setBad(bad+1)

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
        <Statistics good={good} neutral={neutral} bad={bad}/>
      </div>
    </div>
  )
}

export default App
