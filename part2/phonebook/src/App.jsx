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
    
    let i
    for (i = 0; i < persons.length; i++) {
      if (persons[i].name === nameObject.name) {
        alert(`${newName} is already added to phonebook`)
        return(setNewName('')) //Removes the already existing name from input-field
      } 
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
          Name: <input 
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