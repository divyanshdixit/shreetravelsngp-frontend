import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count: 0
}

export const exampleSlice = createSlice({
    name: 'example',
    initialState,
    reducers:{
        increment: (state, action) => {
            state.count += 1
        },

        decrement: (state) => {
            state.count -= 1
        }
    }
})

export const {increment, decrement} = exampleSlice.actions;
export default exampleSlice.reducer