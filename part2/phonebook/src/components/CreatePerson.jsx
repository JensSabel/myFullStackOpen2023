import { useState } from 'react'
import axios from 'axios'

const CreatePerson = ({ persons, setPersons, setFilter, filter, urlBase}) => {
    
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
    
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
        
        axios
            .post(urlBase, nameObject)
            .then(response => {
                setPersons(persons.concat(response.data))
                setFilter(filter.concat(response.data))
                console.log('Promised Post Completed')
            })
        
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


      return(
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
      )
}

export default CreatePerson