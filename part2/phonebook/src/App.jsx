import { useState } from 'react'

const Person = (props) => <p>{props.name}</p>

const App = () => { 
  const [persons, setPersons] = useState([
    { id: 1, name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')

  const addPerson = (event) => {
    event.preventDefault()
    console.log('button clicked ', event.target)

    const nameObject = {
      id: persons.length + 1,
      name: newName
    }

    setPersons(persons.concat(nameObject))
    setNewName('')
  }

  const handleAddName = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        <div>
          name: <input 
            value={newName}
            onChange={handleAddName}
            />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <div>
        {persons.map(person =>
            <Person key={person.id} name={person.name}/>
          )}
      </div>
    </div>
  )
}

export default App