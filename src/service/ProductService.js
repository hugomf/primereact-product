import axios from "axios";


const baseUrl = "http://localhost:8080/product"

export const create = (product) => {
    return  axios.post(baseUrl, product).then(res => res.data);
}

export const update = (product) => {
    return  axios.put(`${baseUrl}/${product.id}`, product).then(res => res.data);
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
    return  await axios.get(`${baseUrl}?page=${page}&pageSize=${rows}&sortField=${sortField}&sortOrder=${sortOrder}`).then(res => res.data);
}
