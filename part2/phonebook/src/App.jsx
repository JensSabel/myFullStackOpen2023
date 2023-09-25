import { useState } from 'react'

const Person = (props) => <p>{props.name} {props.number}</p>

let ShowPeople = ({persons}) => {
  return(
    <div>
      {persons.map(persons =>
      <Person key={persons.id} name={persons.name} number={persons.number}/>
    )}
    </div>
  )
}

const App = () => { 
  const [persons, setPersons] = useState([
    { id: 1, name: 'Arto Hellas', number: '045-3128965' },
    { id: 2, name: 'Dudley Jordan', number: '021-431941'},
    { id: 3, name: 'Lynette Acosta', number: '056-123041'},
    { id: 4, name: 'Eddie Mullins', number: '123-513123'}
  ])

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setFilter] = useState(persons)

  const addPerson = (event) => {
    event.preventDefault()
    console.log('button clicked ', event.target)

    const nameObject = {
      id: persons.length + 1,
      name: newName,
      number: newNumber
    }
    
    let i
    for (i = 0; i < persons.length; i++) {
      if (persons[i].name === nameObject.name) {
        alert(`${newName} is already added to phonebook`)
        return(
          setNewName(''),
          setNewNumber('')
          ) 
      } 
    } 
    //If person is not found already the person gets added
    setPersons(persons.concat(nameObject))
    //To update the temp array used to show contacts on-page
    setFilter(filter.concat(nameObject))
    //Cleanup 
    setNewName('')
    setNewNumber('')
    
  }

  const handleAddName = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleAddNumber = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  const handleFilter = (event) => {
    console.log(event.target.value)
    const query = event.target.value;
    let updatedList = [...persons];
    updatedList = updatedList.filter((name) => {
      return name.name.indexOf(query) !== -1;
    });
    setFilter(updatedList)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <div>
        Filter shown with: <input
          onChange={handleFilter}
        />
      </div>
      <h2>Add a new contact</h2>
      <form onSubmit={addPerson}>
        <div>
          Name: <input 
            value={newName}
            onChange={handleAddName}
            />
        </div>
        <div>
          Number: <input 
            value={newNumber}
            onChange={handleAddNumber}
          />
        </div>
        <div>
          <button type="submit">Add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ShowPeople persons={filter}/>
    </div>
  )
}

export default App