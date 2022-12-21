import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { paginatorTemplate, headerTemplate, actionsTemplate } from './PaginatorTemplate'

import { ProductForm } from "./ProductForm"

//import { ProductContext } from "../context/ProductContext";

const HugoTable = () => {

  //const { products } = useContext(ProductContext);
  const [isVisible, setIsVisible] = useState(false);
  const [items, setItems] = useState([]);
  const [first, setFirst] = useState(0);
  const [totalRecords, setTotalRecords] = useState(0);
  const [pageSize, setPageSize] = useState(10);
  const [sortField, setSortField] = useState("id");
  const [sortOrder, setSortOrder] = useState("1");
  

  useEffect(() => {
    fetchData(first, pageSize, sortField, sortOrder);
  },[first, pageSize, sortField, sortOrder]);

  const fetchData = async (first, rows, sortField, sortOrder) => {
    
    try {
      
      var newPage = (first) / rows;

      const response = 
        await axios
        .get(`http://localhost:8080/product?page=${newPage}&pageSize=${rows}&sortField=${sortField}&sortOrder=${sortOrder}`);
      
      const data = response.data;
      setItems(data.items);
      setTotalRecords(data.totalRecords);

    } catch (error) {
      console.error(error);
    }
  };

  const onPageChange = (e) => {
    setFirst(e.first);
    setPageSize(e.rows);
  }

  const onPageSort = (e) => {
    setSortField(e.sortField);
    setSortOrder(e.sortOrder);
  };

 
  return (
    <div>
      <DataTable
        paginator
        header={headerTemplate}
        paginatorTemplate={paginatorTemplate}
        value={items}
        lazy={true}
        rows={pageSize}
        first={first}
        totalRecords={totalRecords}
        onPage={onPageChange}
        sortField={sortField}
        sortOrder={sortOrder}
        onSort={onPageSort} >

        <Column field="id" header="ID" sortable />
        <Column field="title" header="title" sortable />
        <Column field="sku" header="sku" sortable/>
        <Column field="imagePath" header="imagePath" />
        <Column body={actionsTemplate} header="actions" />
      </DataTable>
      <ProductForm isVisible={isVisible} setIsVisible={setIsVisible} />
    </div>
  );
};

export { HugoTable };
