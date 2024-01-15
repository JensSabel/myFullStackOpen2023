import { useState, useEffect } from 'react'
import personService from './services/ServicePerson'

import ShowPeople from './components/ShowPeople'
import Filter from './components/Filter'
import CreatePerson from './components/CreatePerson'

import Notification from './components/Notification'

const App = () => {
  const [persons, setPersons] = useState([])
  const [filter, setFilter] = useState(persons)

  const [message, setMessage] = useState(null)
  const [type, setType] = useState("No info")

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
      <Notification message={message} type={type} />
      <Filter persons={persons} setFilter={setFilter}/>
      <h2>Add a new contact</h2>
      <CreatePerson persons={persons} 
                    setPersons={setPersons}
                    setFilter={setFilter} 
                    setMessage={setMessage}
                    setType={setType}
                    filter={filter}
                    />
      <h2>Numbers</h2>
      <ShowPeople persons={filter}
                  setMessage={setMessage}
                  setType={setType}
                  />
    </div>
  )
}

export default App