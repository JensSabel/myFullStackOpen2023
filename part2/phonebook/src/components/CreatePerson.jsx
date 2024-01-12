import { useState } from 'react'
import personService from '../services/ServicePerson'


const CreatePerson = ({ persons, setPersons, setFilter, setMessage, setType, filter}) => {
    
    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
    
    const addPerson = (event) => {
        event.preventDefault()
        console.log('button clicked ', event.target)

        let existingPersonIndex = persons.findIndex((persons) => persons.name === newName);
        
        const nameObject = {
          id: persons.length + 1,
          name: newName,
          number: newNumber
        }

        if (existingPersonIndex !== -1) {
          if (window.confirm(`${nameObject.name} is already added to the phonebook, replace the old number with the new one?`)) {  
            personService
            .updatePerson(existingPersonIndex+1, nameObject)
            .then(updatedPerson => {
              const updatedPersons = [...persons];
              updatedPersons[existingPersonIndex] = updatedPerson;
              setType("success")
              setMessage(`Updated the number for: ${nameObject.name} successfully`)
              setPersons(updatedPersons);
              setFilter(updatedPersons);
              console.log("Updated contacts")
              setTimeout(() => {
                setMessage(null)
              }, 5000)
            })
          }
        } else {
          personService
            .create(nameObject)
            .then(response => {
                setType("success")
                setMessage(`Added ${nameObject.name} successfully`)
                setPersons(persons.concat(response))
                setFilter(filter.concat(response))
                console.log('Promised Post Completed')
                setTimeout(() => {
                  setMessage(null)
                }, 5000)
            })
        }
        
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