import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { localStorageData } from "./auth";

export const getAllUsersFromServer = createAsyncThunk(
    'User/getAllUsersFromServer',
    async () => {
        if (localStorageData) {
            return fetch(`https://webstorepr.pythonanywhere.com/auth/users/`, {
                headers: {
                    'Authorization': `JWT ${localStorageData}`
                }
            })
                .then(res => res.json())
                .then(data => data)
        }
    }
)

export const usersSlice = createSlice({
    name: 'User',
    initialState: [],
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getAllUsersFromServer.fulfilled,
            (_, action) => action.payload
        )

    }
})

export default usersSlice.reducer