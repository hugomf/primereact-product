import { createContext } from "react";

const ProductContext2 = () => createContext({
  
  items: [],
  loading: false,
  error: null,
  get: () => [],
  getById: () => {},
  create: ()  => {},
  update: () => {},
  delete: () => {},
});

export default ProductContext2