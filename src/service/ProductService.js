import axios from "axios";
import { buildApiUrl } from "../config/apiConfig";

export const create = (product) => {
    const url = buildApiUrl('PRODUCT', 'CREATE');
    return axios.post(url, product).then(res => res.data);
}

export const update = (product) => {
    const url = buildApiUrl('PRODUCT', 'UPDATE', product.id);
    return axios.put(url, product).then(res => res.data);
}

export const remove = (id) => {
    const url = buildApiUrl('PRODUCT', 'DELETE', id);
    return axios.delete(url).then(res => res.data);
}

export const get = (id) => {
    const url = buildApiUrl('PRODUCT', 'GET', id);
    return axios.get(url).then(res => res.data);
}

export const getAll = () => {
    const url = buildApiUrl('PRODUCT', 'GET_ALL');
    return axios.get(url).then(res => res.data);
}

export const findAllByPageAndSort = async (first, rows, sortField, sortOrder) => {
    const page = first / rows;
    const url = buildApiUrl('PRODUCT', 'GET_BY_PAGE', page, rows, sortField, sortOrder);
    return await axios.get(url).then(res => res.data);
}
