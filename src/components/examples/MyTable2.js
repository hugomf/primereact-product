import { useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { useGetData } from "../hooks/useGetData";
//import { useQuery } from "react-query";

function MyTable() {

  const initialParams = {
    page: 0,
    rows: 10,
    sortField: "id",
    sortOrder: 1,
    totalRecords: 1,
  }

  const [lazyParams, setLazyParams] = useState(initialParams);

  const {data, isLoading} = useGetData(lazyParams);
 
  console.log("data", data);

  const onSort = (event) => {
    setLazyParams(event);
  };

  const onPage = (event) => {
    setLazyParams(event);
  };


  return (
    <DataTable
      paginator
      rows={lazyParams.rows}
      value={data?.items}
      sortField={lazyParams.sortField}
      sortOrder={lazyParams.sortOrder}
      totalRecords={100}
      onSort={onSort}
      onPage={onPage} 
      rowsPerPageOptions={[5,10,20,30,50]}
      loading={isLoading}>
      <Column field="id" header="ID" />
      <Column field="title" header="TITLE" />
    </DataTable>
  );
}

export { MyTable };
