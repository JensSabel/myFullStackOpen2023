import { useState } from 'react'

const Header = props => <h1>{props.text}</h1>
const Button = props => <button onClick={props.handleClick}>{props.text}</button>
const Statistics = props => <p>{props.text}: {props.score}</p>

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <div>
        <Header text="Give Feedback"/>
        <Button handleClick={() => setGood(good + 1)} text="Good"/>
        <Button handleClick={() => setNeutral(neutral + 1)} text="Neutral"/>
        <Button handleClick={() => setBad(bad + 1)} text="Bad"/>
      </div>
      <div>
        <Header text="Statistics"/>
        <Statistics text="Good" score={good}/>
        <Statistics text="Neutral" score={neutral}/>
        <Statistics text="Bad" score={bad}/>
      </div>
    </div>
  )
}

export default App
