import React, { useState } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Dropdown } from 'primereact/dropdown';
// import { useMachine } from '@xstate/react';
// import { createMachine } from 'xstate';
import useSWR from 'swr'

import Spinner from "./Spinner"



const template2 = {
  layout: 'RowsPerPageDropdown CurrentPageReport PrevPageLink NextPageLink',
  'RowsPerPageDropdown': (options) => {
      const dropdownOptions = [
          { label: 10, value: 10 },
          { label: 20, value: 20 },
          { label: 50, value: 50 },
          { label: 100, value: 100 },
      ];

      return (
          <React.Fragment>
              <span className="mx-1" style={{ color: 'var(--text-color)', userSelect: 'none' }}>Items per page: </span>
              <Dropdown value={options.value} options={dropdownOptions} onChange={options.onChange} />
          </React.Fragment>
      );
  },
  'CurrentPageReport': (options) => {
      return (
          <span style={{ color: 'var(--text-color)', userSelect: 'none', width: '120px', textAlign: 'center' }}>
              {options.first} - {options.last} of {options.totalRecords}
          </span>
      )
  }
};


const fetcher = (url) => fetch(url).then((res) => res.json());


function TableExample() {

  
  const [lazyParams, setLazyParams] = useState({
    first: 0,
    rows: 10,
    page: 1,
    sortField: null,
    sortOrder: null
 });



  const onPage = (event) => {
    setLazyParams(event)
  }

  console.log(lazyParams);
  
  const { data, error, isLoading } = useSWR('http://localhost:8080/product?page=' + lazyParams.page, fetcher)

  if (error) return <div>failed to load</div>
  if (isLoading) {
    return <Spinner />;
  }

  return(

      <DataTable value={data.data}
        paginatorTemplate={template2}
        paginator={true}
        lazy={true}
        totalRecords={data.totalElements}
        rows={lazyParams.rows}
        paginatorClassName="justify-content-end"
        className="mt-6" 
        responsiveLayout="scroll"
        first={lazyParams.first}
        onPage={onPage}>
        <Column field="id" header= "ID" />
        <Column field="imagePath" header= "PATH" />
        <Column field="sku" header= "SKU" />
        <Column field="title" header= "TITLE" />
      </DataTable>

  );
}

export default TableExample;
