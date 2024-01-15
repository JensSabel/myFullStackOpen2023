import personService from '../services/ServicePerson'

const handleDelete = ({name, id, setMessage, setType}) => {
    if (window.confirm(`Do you want to delete ${name} from the phonebook?`)) {
        personService.deletePerson(id).then(() => {
            window.location.reload();
        }).catch( error => {
            if (error.response && error.response.status === 404) {
                setType("error")
                setMessage(`Information about ${name} has already been removed from the server!`)
                setTimeout(() => {
                    setMessage(null)
                }, 5000)
            }
        })
    }
}

const Person = (props) => <p>{props.name} {props.number} <button onClick={() => handleDelete({name: props.name, id: props.id, setMessage: props.setMessage, setType: props.setType})} type="submit">Remove</button></p>

export default Person