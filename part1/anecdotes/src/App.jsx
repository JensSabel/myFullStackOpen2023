import { useState } from 'react'

const Button = props => <button onClick={props.handleClick}>{props.text}</button>
const Header = props => <h1>{props.text}</h1>

const Favourite = (props) => {
  let max = 0
  let bigIndex = null
  const keys = Object.keys(props.array)
  
  let i
  for (i = 0; i < keys.length; i++) {
    const value = props.array[keys[i]]
    if(value > max) {
      max = value
      bigIndex = i
    }
  }
  
  if(bigIndex === null){
    return(
      <p>No votes given today!</p>
    )
  } else {
    return(
      <div>
        <p>{props.anecdotes[bigIndex]}</p>
        <p>Has {props.array[bigIndex]} votes!</p>
      </div>
    )
  }
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]
   
  const [selected, setSelected] = useState(0)
  const SetPage = () => {
    let x = Math.floor(Math.random() * anecdotes.length)
    setSelected(x)
  }
  
  const [points, setPoints] = useState([0,0,0,0,0,0,0,0])
  const PointHandler = () => {
    const temp = {...points}
    temp[selected] += 1
    setPoints(temp)
  }

  return (
    <div>
      <div>
        <Header text="Anecdote of the Day"/>
        <p>{anecdotes[selected]}</p>
        <p>Has {points[selected]} votes!</p>
      </div>
      <div>
        <Button handleClick={SetPage} text="Next Anecdote"/>
        <Button handleClick={PointHandler} text="Vote for Anecdote"/>
      </div>
      <div>
        <Header text="Anecdote with the most votes"/>
        <Favourite array={points} anecdotes={anecdotes}/>
      </div>
    </div>
  )
}

export default App