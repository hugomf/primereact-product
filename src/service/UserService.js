import axios from "axios";


const baseUrl = "http://localhost:8082/users"

export const create = (user) => {
    return  axios.post(baseUrl, user).then(res => res.data);
}

export const update = (user) => {
    return  axios.put(`${baseUrl}/${user.id}`, user).then(res => res.data);
}

export const remove = (id) => {
    return  axios.delete(`${baseUrl}/${id}`).then(res => res.data);
}

export const get =  (id) => {
    return  axios.get(`${baseUrl}/${id}`).then(res => res.data);
}

export const getAll =  () => {
    return  axios.get(baseUrl).then(res => res.data);
}

export const findAllByPageAndSort = async (first, rows, sortField, sortOrder) => {
    const page = first / rows;
    return  await axios.get(`${baseUrl}?page=${page}&size=${rows}&sortField=${sortField}&sortOrder=${sortOrder}`).then(res => res.data);
}
