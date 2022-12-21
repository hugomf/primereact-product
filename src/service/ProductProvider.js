import React, {useState, useEffect} from 'react'
import ProductContext2 from '../context/ProductContext2'
import {getAll,getById,update,remove,create} from '../service/ProductService'

const ProductProvider = ({children}) => {
 
    const [items,setItems] = useState(null);
    const [editProduct, setEditProduct] = useState([]);
    const [loading,setLoading] = useState(false);
    const [error,setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const products = await getAll();
                setItems(products.data.items);
            } catch (error) {
                setError(error);
            }
            setLoading(false);
        }
        fetchData();
    }, []);


    const getAll = async () => {
        setLoading(true);
        try {
            const products = await getAll();
            setItems(products.data.items);
        } catch (error) {
            setError(error);
        }
        setLoading(false);
    }

    const getById = async (id) => {
        setLoading(true);
        try {
            const products = await getById(id);
            setEditProduct(products.data.items);
        } catch (error) {
            setError(error);
        }
        setLoading(false);
    }

}

export default ProductProvider