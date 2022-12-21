import axios from "axios";


const baseUrl = "http://localhost:8080/product"


export const create = (product) => {
    return  axios.post(baseUrl, product).then(res => res.data);
}

export const update = (product) => {
    return  axios.put(`${this.baseUrl}/${product.id}`, product).then(res => res.data);
}

export const remove = (id) => {
    return  axios.delete(`${this.baseUrl}/${id}`).then(res => res.data);
}

export const find =  () => {
    return  axios.get(this.baseUrl).then(res => res.data);
}

export const findAllByPageAndSort = async (page, pageSize, sortField, sortOrder) => {
    return  axios.get(`${this.baseUrl}?page=${page}&page=${pageSize}&sortField=${sortField}&sortOrder=${sortOrder}`).then(res => res.data);
}

export const findById =  (id) => {
    return  axios.get(`${this.baseUrl}/${id}`).then(res => res.data);
}


