import React, { useState, useRef } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { paginatorTemplate } from './PaginatorTemplate'
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { DynamicForm } from '../dynaform/DynamicForm';
import { Toast } from 'primereact/toast';
import { ProductService } from '../../service/ProductService'
import { useQuery } from "react-query";


const DynamicTable = (props) => {

  const [page, setPage] = useState(0);
  const [first, setFirst] = useState(0);
  const [totalRecords, setTotalRecords] = useState(0);
  const [pageSize, setPageSize] = useState(10);
  const [sortField, setSortField] = useState("id");
  const [sortOrder, setSortOrder] = useState("1");
  
  const [isFormVisible, showForm] = useState(false);
  const toast = useRef(null);
   

  var newPage = (first) / pageSize;
  const {data, error, isLoading } = useQuery(['products', newPage, pageSize, sortField, sortOrder], 
    () => ProductService.findAllByPageAndSort(newPage, pageSize, sortField, sortOrder));



  const columns = [
    { field: "id", header: "ID", sortable: true },
    { field: "title", header: "title", sortable: true },
    { field: "sku", header: "sku", sortable: true },
    { field: "imagePath", header: "imagePath" }
  ];


  const headerTemplate = (
    <div>
        <Button 
          className="mr-2"
          icon="pi pi-plus"
          label="Add Product"
        />
    </div>
  );


 const actionsTemplate = (

    <div>
        <Button 
          className="p-button-rounded mr-2"
          icon="pi pi-pencil"
        />
        <Button 
          className="p-button-rounded p-button-danger mr-2"
          icon="pi pi-trash"
          onClick={(e) => alert(e.target.value)}
        />
    </div>

  );

  const onPageChange = (e) => {
    setFirst(e.first);
    setPageSize(e.rows);
  }

  const onPageSort = (e) => {
    setSortField(e.sortField);
    setSortOrder(e.sortOrder);
  };

  if (isLoading) {
    return (<p>Is Loading</p>);
  }
  if (error) {
    console.log(error);
  }

  setTotalRecords(data.totalRecords);

  return (
    <div>
       <Dialog visible={isFormVisible} onHide={() => showForm(false)} position="top" 
        showHeader={false} breakpoints={{ '960px': '80vw' }} style={{ width: '30vw' }}>
            <DynamicForm />
        </Dialog>
      <Toast ref={toast}/>   
      <DataTable
        paginator
        header={headerTemplate}
        paginatorTemplate={paginatorTemplate}
        value={data.items}
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
        <Column body={actionsTemplate} header="actions" />

      </DataTable>
    </div>
  );
};

export { DynamicTable };
