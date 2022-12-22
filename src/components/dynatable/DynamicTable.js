import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { paginatorTemplate } from './PaginatorTemplate'

const DynamicTable = (props) => {

  console.log(props);

  const [items, setItems] = useState([]);
  const [first, setFirst] = useState(0);
  const [totalRecords, setTotalRecords] = useState(0);
  const [pageSize, setPageSize] = useState(props.pageSize);
  const [sortField, setSortField] = useState(props.sortField);
  const [sortOrder, setSortOrder] = useState(props.sortOrder);
  const [baseUrl] = useState(props.baseUrl);
  const [columns] = useState(props.columns);
  

  useEffect(() => {
    fetchData(baseUrl,first, pageSize, sortField, sortOrder);
  },[baseUrl, first, pageSize, sortField, sortOrder]);

  const fetchData = async (baseUrl,first, rows, sortField, sortOrder) => {
    
    try {
      console.log(baseUrl)
      var newPage = (first) / rows;

      const response = 
        await axios
        .get(`${baseUrl}?page=${newPage}&pageSize=${rows}&sortField=${sortField}&sortOrder=${sortOrder}`);
      
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
        header={props.headerTemplate}
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

        {columns.map((column) => (
          <Column key={column.field} field={column.field} header={column.header} sortable={column.sortable} />
        ))}
        <Column body={props.actionsTemplate} header="actions" />

      </DataTable>
    </div>
  );
};

export { DynamicTable };
