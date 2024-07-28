import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const userLocalStorage = localStorage.getItem("user") || null
export const localStorageData = userLocalStorage && JSON.parse(userLocalStorage)

export const getUserInfosFromServer = createAsyncThunk(
    'User/getUserInfosFromServer',
    async () => {
        const userFetch = await fetch(`https://webstorepr.pythonanywhere.com/auth/users/me/`, {
            headers: {
                'Authorization': `JWT ${localStorageData}`
            }
        })
        const userData = userFetch.json()
        return userData
    }
)

export const registerUserAction = createAsyncThunk(
    'User/registerUserAction',
    async (newUserInfo: { username: string, password: string }) => {
        const registerUserFetch = await fetch(`https://webstorepr.pythonanywhere.com/auth/users/`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newUserInfo),
        })
        const tokenFetch = await fetch(`https://webstorepr.pythonanywhere.com/auth/jwt/create/`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: newUserInfo.username,
                password: newUserInfo.password,
            }),
        })
        const tokenData = await tokenFetch.json()
        localStorage.setItem('user', JSON.stringify(tokenData.access))
        const registerUserData = registerUserFetch.json()
        return registerUserData
    }
)

export const loginUserAction = createAsyncThunk(
    'User/loginUserAction',
    async (newUserInfoForGetToken: { username: string, password: string }) => {
        const tokenFetch = await fetch(`https://webstorepr.pythonanywhere.com/auth/jwt/create/`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newUserInfoForGetToken),
        })

        const tokenData = await tokenFetch.json()
        localStorage.setItem('user', JSON.stringify(tokenData.access))
        const userFetch = await fetch(`https://webstorepr.pythonanywhere.com/auth/users/me/`, {
            headers: {
                'Authorization': `JWT ${tokenData.access}`
            }
        })
        const userData = userFetch.json()
        return userData
    }
)

export const logOutUserAction = createAsyncThunk(
    'User/logOutUserAction',
    async () => {
        localStorage.removeItem('user')
    }
)

const initialState = {
    userInfos: null
}

export const authSlice = createSlice({
    name: 'User',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getUserInfosFromServer.fulfilled,
                (state, action) => {
                    state.userInfos = action.payload
                }
            )
            .addCase(getUserInfosFromServer.pending,
                (state) => {
                    state.userInfos = null
                }
            )
            .addCase(getUserInfosFromServer.rejected,
                (state) => {
                    state.userInfos = null
                }
            )

        builder
            .addCase(registerUserAction.fulfilled,
                (state, action) => {
                    state.userInfos = action.payload
                }
            )
            .addCase(registerUserAction.pending,
                (state) => {
                    state.userInfos = null
                }
            )
            .addCase(registerUserAction.rejected,
                (state) => {
                    state.userInfos = null
                }
            )

        builder
            .addCase(loginUserAction.fulfilled,
                (state, action) => {
                    state.userInfos = action.payload
                }
            )
            .addCase(loginUserAction.pending,
                (state) => {
                    state.userInfos = null
                }
            )
            .addCase(loginUserAction.rejected,
                (state) => {
                    state.userInfos = null
                }
            )


        builder
            .addCase(logOutUserAction.fulfilled,
                (state) => {
                    state.userInfos = null
                }
            )
    }
})


export default authSlice.reducer