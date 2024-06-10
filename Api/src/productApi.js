import { createApi,fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productApi = createApi({
    reducerPath: "productApi",
    baseQuery: fetchBaseQuery({ baseUrl: "https://fakestoreapi.com" }),
    tagTypes: ["Product"],
    endpoints: (builder) => ({
        getProducts: builder.query({
            query: () => ({
                url: "/products",
                method: "GET",
                headers : {
                    "Content-Type": "application/json",
                },
            }),
            providesTags: ["Product"], 
        
        }),
        postProducts : builder.mutation({
            query: ({body}) => ({
                url: "/products",
                method: "POST",
                body: {
                    body
                },
                headers: {
                    "Content-Type": "application/json",
                },
            }),
            invalidatesTags: ["Product"],
            
        }),

    }),
});

export const { useGetProductsQuery , usePostProductsMutation  } = productApi;
export default productApi;