import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getAllCollectionsFromServer = createAsyncThunk(
    "collections/getAllCollectionsFromServer",
    async () => {
        const collectionsFetch = await fetch(`https://myecommerceapi.pythonanywhere.com/store/collections/`)
        const collectionsData = await collectionsFetch.json()
        return collectionsData
    }
)

export const getSingleCollectionFromServer = createAsyncThunk(
    "collections/getSingleCollectionFromServer",
    async (collectionID: number) => {
        const singleCollectionsFetch = await fetch(`https://myecommerceapi.pythonanywhere.com/store/collections/${collectionID}`)
        const singleCollectionsData = await singleCollectionsFetch.json()
        return singleCollectionsData
    }
)


const initialState = {
    allCollections: null,
    singleCollection: null,
}

const collectionsSlice = createSlice({
    name: "collections",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAllCollectionsFromServer.fulfilled,
                (state, action) => {
                    state.allCollections = action.payload
                }
            )
        builder
            .addCase(getSingleCollectionFromServer.fulfilled,
                (state, action) => {
                    state.singleCollection = action.payload
                }
            )
    }
})


export default collectionsSlice.reducer