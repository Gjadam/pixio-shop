import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { localStorageData } from "./auth";
import { IProductBox } from "../../Components/Modules/ProductBox/ProductBox";

interface IAddProduct {
    newProductData: {
        title: string;
        slug: string;
        inventory: number | null;
        unit_price: number | null;
        collection: number;
    }
    newProductImage: FormData
}

export const getAllProductsFromServer = createAsyncThunk(
    'products/getAllProductsFromServer',
    async () => {
        const productsFetch = await fetch(`https://webstorepr.pythonanywhere.com/store/products`, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const productsData = await productsFetch.json()
        return productsData
    }
)

export const addProductToServer = createAsyncThunk(
    'products/addProductToServer',
    async (newProduct: IAddProduct) => {

        const newProductFetch = await fetch(`https://webstorepr.pythonanywhere.com/store/products/`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `JWT ${localStorageData}`
            },
            body: JSON.stringify(newProduct.newProductData)
        })
        const newProductData = await newProductFetch.json()
        
        const newProductImageFetch = await fetch(`https://webstorepr.pythonanywhere.com/store/products/${newProductData.id}/images/`, {
            method: "POST",
            headers: {
                'Authorization': `JWT ${localStorageData}`
            },
            body: newProduct.newProductImage
        })
        const newProductImageData = await newProductImageFetch.json()

        const finalProduct = [newProductData, newProductData.images.push(newProductImageData)]

        return finalProduct
    }
)

const initialState: {loading: boolean, allProductsData: IProductBox[]} = {
    loading: false,
    allProductsData: []
}

const productSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAllProductsFromServer.fulfilled,
                (state, action) => {
                    state.allProductsData = action.payload.results
                }
            )
        builder
            .addCase(addProductToServer.fulfilled,
                (state, action) => {
                    state.loading = false
                    state.allProductsData = [...state.allProductsData, action.payload[0]]
                }
            )
            .addCase(addProductToServer.pending,
                (state) => {
                    state.loading = true
                }
            )
            .addCase(addProductToServer.rejected,
                (state) => {
                    state.loading = false
                }
            )
    }
})


export default productSlice.reducer