import React, {createContext, useState, useEffect} from "react";
import { ProductService } from "../service/ProductService";

export const ProductContext  = createContext();

const ProductContextProvider = (props) => {

    const productService = new ProductService();

    const [products, setProducts] = useState([]);

    const [editProduct, setEditProduct] = useState([]);


    useEffect(() => {
        productService.readAll().then(data => {setProducts(data);});
    }, [productService, products]);

    const createProduct = (product) => {
        productService
            .create(product)
            .then(data => {setProducts(...products,data)})
    };

    const deleteProduct = (id) => {
        productService
            .delete(id)
            .then(() => setProducts(products.filter(p => p.id !== id)));
    };

    const findProduct = (id) => {
        productService
            .find(id)
            .then(data => {setEditProduct(...product,data)})
    };
    
    const updateProduct = (product) => {
        productService
            .update(product)
            .then(data => 
                setProducts(
                    products.map((p) => (p.id === product.id ? data : product))
                )
            );
        setEditProduct(null);
    };

    return(
        <ProductContext.Provider
            value={{
                createProduct,
                deleteProduct,
                findProduct,
                updateProduct,
                products,
                editProduct,
            }}
            >
            {props.children}
        </ProductContext.Provider>
    );
}


export default ProductContextProvider;