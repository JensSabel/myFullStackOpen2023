import Person from './Person'

let ShowPeople = (props) => {
    let persons = props.persons
    return(
      <div>
        {persons.map(persons =>
        <Person key={persons.id} name={persons.name} number={persons.number}/>
      )}
      </div>
    )
  }

  export default ShowPeople