import React, { useRef, useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { useFetchData } from "../hooks/useFetchData";
import { Button } from "primereact/button";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { confirmDialog, ConfirmDialog } from 'primereact/confirmdialog';
import { PrimeIcons } from 'primereact/api'
import  DynamicForm  from "./dynaform/DynamicForm";
import { Dialog } from "primereact/dialog";
import { Toast } from 'primereact/toast';
import { formSpec } from './ProductFormSpec';
import { Rating } from 'primereact/rating';

// feature specific
import { remove, get, update, create } from "../service/ProductService";

//const baseUrl = "https://api.instantwebtools.net/v1/passenger";

function MyTable() {

  const [first, setFirst] = useState(0);
  const [rows, setRows] = useState(5);
  const [sortField, setSortField] = useState('id');
  const [sortOrder, setSortOrder] = useState(1);

  const [isProductFormVisible, showProductForm] = useState();
  const [formValues, setFormValues] = useState({});
  const formRef = useRef();
  const toast = useRef(null);

  const stylebtnDelete = {
    backgroundColor: 'rgb(195 46 46 / 85%)'
  };


  const { data, error, isError, isLoading, isFetching, refetch } = 
    useFetchData( first, rows, sortField, sortOrder);

  
  const headerTemplate = (
    <div>
        <Button 
          className="mr-2"
          icon="pi pi-plus"
          label="Add Product"
          onClick={(e) => onFetchProduct({})}
        />
    </div>
  );

  const actionsTemplate = (rowData) => (

    <div>
        <Button 
          className="p-buttom-sm p-1 mr-2"
          icon={PrimeIcons.PENCIL}
          onClick={(e) => onFetchProduct(rowData)}
        />
        <Button
          className='p-buttom-sm p-1 mr-2' style={stylebtnDelete}
        // className="p-button-rounded p-button-danger mr-2"
         icon={PrimeIcons.TRASH}
         onClick={(e) => onConfirm(rowData)}
        />
    </div>

  );

  const columns = [
    { type: "text", field: "id", header: "ID", sortable: true, style: { width: '15%' }},
    { type: "text", field: "title", header: "title", sortable: true },
    { type: "text", field: "sku", header: "sku", sortable: true },
    { type: "text", field: "price.basePrice", header: "price", sortable: true },
    { type: "rating", field: "rating", header: "rating", sortable: true },
    { type: "image", field: "imagePath", header: "image" },
    { type: "actions", body: (rowData) => actionsTemplate(rowData), header: "Actions" },
  ];

  const showError = (error) => {
    toast.current.show({severity:'error', summary: error.name, detail: error.message, life: 3000});
}

  const onFetchProduct = (rowData) => {
    if (rowData && 'id' in rowData) {
      get(rowData.id).then(data=> {
        rowData.save="update";
        setFormValues(rowData);
        showProductForm(true);
      })
      .catch((error) => showError(error));
    } else {
        setFormValues({
          save: "insert"
      }); //set default values (from FieldSpec)
      showProductForm(true);
    }
  }

  const onPage = (e) => {
    setFirst(e.first);
    setRows(e.rows);
  };

  const onSort = (e) => {
    setSortField(e.sortField);
    setSortOrder(e.sortOrder);
  }

  const onProductFormHide = (name) => {
    showProductForm(false);
  }

  const onPrepareSave =() => {
    formRef.current.dispatchEvent(
      new Event("submit", { bubbles: true, cancelable: true })
    );
  }

  const onSave = (formData) =>  {

    if (formData.save === "insert") {
      create(formData)
      .then(() => {refetch(); showProductForm(false);})
      .catch((error) => showError(error));

    } else {
      update(formData)
      .then(() => {refetch(); showProductForm(false);})
      .catch((error) => showError(error));
    }
   
  }

  const onConfirm = (rowData) => {
    confirmDialog({
      header: "Delete Confirmation",
      message: "Are you sure you want to delete this row?",
      acceptLabel: "Absolutely",
      rejectLabel: "No",
      accept: () => onDelete(rowData),
    });

  }
 
  const onDelete = (rowData) => {
    remove(rowData.id)
      .then(() => refetch())
      .catch((error) => showError(error));
  }

  // If the data is still loading, display a loading message
  if (isLoading || isFetching) {
    return <div>Loading...</div>;
  }

  // If there was an error fetching the data, display an error message
  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  // If the data has been successfully fetched, render the table
  return (
    <div>
      
      <Toast ref={toast} />
      <Dialog header="Product" visible={isProductFormVisible} style={{ width: '30vw' }} 
           onHide={() => onProductFormHide()} footer={() => {
              return(
                <div>
                  <Button label="Cancel" icon="pi pi-times" onClick={() => onProductFormHide()} className="p-button-text" />
                  <Button label="Save" icon="pi pi-check" onClick={() => onPrepareSave()} autoFocus />
                </div>
              );
           }}>
          <DynamicForm ref={formRef} formSpec={formSpec} formValues={formValues} onSubmit={onSave} />
      </Dialog>

      <ConfirmDialog  /> 
      
      <DataTable
        paginator
        lazy
        header={headerTemplate}
        currentPageReportTemplate="Showing {first} to {last} of {totalRecords}"
        paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
        value={data?.items}
        first={first}
        rows={rows}
        totalRecords={data?.totalRecords}
        sortField={sortField}
        sortOrder={sortOrder}
        onPage={onPage}
        onSort={onSort}
        rowsPerPageOptions={[10, 20, 30, 50]} >

        {columns.map(function(column, index) {
            if (column.type === "text") {
              return (
                <Column key={column.header} field={column.field} header={column.header} sortable={column.sortable} style={column.style} /> 
              )
            } else if (column.type === "image") {
              return (
                <Column key={column.header} body={(data, props) => (
                  <LazyLoadImage
                    src={data[column.field]}  
                    width={30} />)} header={column.header}  style={column.style} /> 
              )
            } else if (column.type === "rating") {
              return (
                <Column key={column.header} body={(data, props) => (
                  <Rating value={data[column.field]}
                    stars={5} cancel={false} />)} header={column.header}  style={column.style} /> 
              )
            } else if (column.type === "actions") {
              return (
                <Column key={column.header} body={column.body} header="actions" />
              )
            } else {
              return (<></>)
            }
        })}
      </DataTable>
    </div>

  );
}

export { MyTable };
