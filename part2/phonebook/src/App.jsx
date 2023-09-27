import { useState, useEffect } from 'react'
import axios from 'axios'

import ShowPeople from './components/ShowPeople'
import Filter from './components/Filter'
import CreatePerson from './components/CreatePerson'

const App = () => {
  const [persons, setPersons] = useState([])
  const [filter, setFilter] = useState(persons)
  const urlBase = 'http://localhost:3001/persons'

  useEffect(() => {
    axios
      .get(urlBase)
      .then(response => {
        console.log("Promise fullfilled")
        setPersons(response.data)
        setFilter(response.data)
        console.log(persons)
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
                    urlBase={urlBase}
                    />
      <h2>Numbers</h2>
      <ShowPeople persons={filter}/>
    </div>
  )
}

export default App