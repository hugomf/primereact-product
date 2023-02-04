import { useQuery } from "react-query";


// const getData = async (first, rows, sortField, sortOrder) => {
//   const page = first / rows;
//   const resp = await axios.get(`${baseUrl}?page=${page}&pageSize=${rows}&sortField=${sortField}&sortOrder=${sortOrder}`);
//   return resp.data;
// };

  export const useFetchData = (location, fetchService, first, rows, sortField, sortOrder) => {

    const { data, error, isError, isLoading, isFetching, refetch } = useQuery(
      ["tableData", location.key, { first, rows, sortField, sortOrder }],
      () => fetchService(first, rows, sortField, sortOrder),
      {
        keepPreviousData: true,
        staleTime: 5000,
        refetchOnWindowFocus: false
      }
    );

    return { data, error, isError, isFetching, isLoading, refetch };
  }
