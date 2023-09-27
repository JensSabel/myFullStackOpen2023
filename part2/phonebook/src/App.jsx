import { useState, useEffect } from 'react'
import personService from './services/ServicePerson'

import ShowPeople from './components/ShowPeople'
import Filter from './components/Filter'
import CreatePerson from './components/CreatePerson'

const App = () => {
  const [persons, setPersons] = useState([])
  const [filter, setFilter] = useState(persons)

  useEffect(() => {
    personService
      .getAll()
      .then(response => {
        setPersons(response)
        setFilter(response)
      })
  }, [])

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter persons={persons} setFilter={setFilter}/>
      <h2>Add a new contact</h2>
      <CreatePerson persons={persons} 
                    setPersons={setPersons}
                    setFilter={setFilter} 
                    filter={filter}
                    />
      <h2>Numbers</h2>
      <ShowPeople persons={filter}/>
    </div>
  )
}

export default App