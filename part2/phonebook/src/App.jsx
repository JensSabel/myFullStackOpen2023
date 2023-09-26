import { useState } from 'react'

import ShowPeople from './components/ShowPeople'
import Filter from './components/Filter'
import CreatePerson from './components/CreatePerson'

const App = () => { 
  const [persons, setPersons] = useState([
    { id: 1, name: 'Arto Hellas', number: '045-3128965' },
    { id: 2, name: 'Dudley Jordan', number: '021-431941'},
    { id: 3, name: 'Lynette Acosta', number: '056-123041'},
    { id: 4, name: 'Eddie Mullins', number: '123-513123'}
  ])

  const [filter, setFilter] = useState(persons)

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