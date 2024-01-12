import Person from './Person'

let ShowPeople = (props) => {
    let persons = props.persons
    return(
      <div>
        {persons.map(persons =>
        <Person key={persons.id} id={persons.id} name={persons.name} number={persons.number} setMessage={props.setMessage} setType={props.setType}/>
      )}
      </div>
    )
  }

  export default ShowPeople