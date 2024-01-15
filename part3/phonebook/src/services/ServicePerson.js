import axios from 'axios'
const baseUrl = 'http://localhost:3001/api/persons'

const getAll = () => {
        const request = axios.get(baseUrl)
        return request.then(response => response.data)
}

const create = newObject => {
    const request = axios.post(baseUrl, newObject)
    return request.then(response => response.data)
}

const deletePerson = id => {
    const request = axios.delete(`http://localhost:3001/api/persons/${id}`)
    return request.then(response => response.data)
}
/*
const updatePerson = (id, updatedData) => {
    const request = axios.put(`http://localhost:3001/persons/${id}`, updatedData);
    return request.then(response => response.data)
}
*/

export default {getAll, create, deletePerson}