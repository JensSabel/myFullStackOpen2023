import personService from '../services/ServicePerson'

const handleDelete = ({name, id}) => {
    if (window.confirm(`Do you want to delete ${name} from the phonebook?`)) {
        personService.deletePerson(id).then(() => {
            window.location.reload();
        })
    }
}

const Person = (props) => <p>{props.name} {props.number} <button onClick={() => handleDelete({name: props.name, id: props.id})} type="submit">Remove</button></p>

export default Person