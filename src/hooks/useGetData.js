
import axios from 'axios'
import { useQuery } from "react-query";
//import { useEffect } from "react";


const getData =  async (baseUrl, params) => {
    const {page, rows, sortField, sortOrder} = params;
    //const page = first / rows;
    const resp = await axios.get(
        `${baseUrl}?page=${page}&pageSize=${rows}&sortField=${sortField}&sortOrder=${sortOrder}`);
    return resp.data;
}

export const useGetData = (params) => {

    //const qc = useQueryClient();
   
    const { data, isLoading } = useQuery(
        ["tableData", params],
        () => getData(params),
        { keepPreviousData: true,
        staleTime: 5000,
        refetchOnWindowFocus: false,
    });


    return {data, isLoading};
}