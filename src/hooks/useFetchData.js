import { useQuery } from "react-query";
import { findAllByPageAndSort } from "../service/ProductService";


// const getData = async (first, rows, sortField, sortOrder) => {
//   const page = first / rows;
//   const resp = await axios.get(`${baseUrl}?page=${page}&pageSize=${rows}&sortField=${sortField}&sortOrder=${sortOrder}`);
//   return resp.data;
// };

  export const useFetchData = (first, rows, sortField, sortOrder) => {

    const { data, error, isError, isLoading, isFetching, refetch } = useQuery(
      ["tableData", { first, rows, sortField, sortOrder }],
      () => findAllByPageAndSort(first, rows, sortField, sortOrder),
      {
        keepPreviousData: true,
        staleTime: 5000,
        refetchOnWindowFocus: false
      }
    );

    return { data, error, isError, isFetching, isLoading, refetch };
  }
