import React, {useState} from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { LazyLoadImage } from "react-lazy-load-image-component";
import Spinner from './Spinner.js'
import { Dropdown } from 'primereact/dropdown';
import axios from 'axios'

import useSWR from 'swr';


//const fetcher = (url) => fetch(url).then((res) => res.json());

const fetcher = async (url) => {
  const res = await axios.get(url);
  return res.data;
};


const imageTemplate = (rowData) => {
  return (
    <LazyLoadImage src={rowData.imagePath} />
  );
};


const renderPaginator = {
  layout: 'RowsPerPageDropdown CurrentPageReport PrevPageLink NextPageLink',
  'RowsPerPageDropdown': (options) => {
      //console.log(options)
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

function LazyTable() {

  const [lazyParams, setLazyParams] = useState({
    first: 0,
    rows: 10,
    page: 1,
    sortField: null,
    sortOrder: null
 });

 console.log("lazyParams:" + JSON.stringify(lazyParams));

  const { data, error, isLoading } = useSWR(
    `http://localhost:8080/product?page=${lazyParams.page}&pageSize=${lazyParams.rows}`,
    fetcher
  );

  const paginate = (event) => {
    console.log("event:" + JSON.stringify(event));
    setLazyParams(event)
  }

  if (error) {
    return <div>Failed to load data</div>;
  }

  if (isLoading) {
    return <Spinner />;
  }


  return (
    <DataTable value={data.items}
      paginatorTemplate={renderPaginator}
      onPage={paginate}
      paginator={true}
      totalRecords={data.totalRecords}
      rows={data.rows}
      first={lazyParams.first}
      //lazy={true}
     // responsiveLayout="scroll"
    >
        <Column field="id" header= "ID" />
        <Column field="title" header= "TITLE" />
        <Column field="sku" header= "SKU" />
        <Column field="description" header= "DESC" />
        <Column body={imageTemplate} header= "IMAGE" />
    </DataTable>
  );
}

export default LazyTable;