import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ISearchReducer } from './search.interface';


const initialState: ISearchReducer = {
    search: ''
}

const searchReducer = createSlice({
    name: 'search', initialState,
    reducers: {
        changeSearchAction: (state, action: PayloadAction<string>) => {
            state.search = action.payload;
        },
        clearSearchAction: (state) => {
            state.search = ''
        }
    }
})

export const { changeSearchAction, clearSearchAction } = searchReducer.actions;

export default searchReducer.reducer;