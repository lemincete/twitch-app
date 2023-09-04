import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IAccessTokenReducer } from './index.interface';

const initialState: IAccessTokenReducer = {
    token: ''
}

const accessTokenReducer = createSlice({
    name: 'accessToken',
    initialState,
    reducers: {
        changeAccessTokenAction: (state, action: PayloadAction<string>) => {
            state.token = action.payload
        }
    }
})

export const { changeAccessTokenAction } = accessTokenReducer.actions;

export default accessTokenReducer.reducer;