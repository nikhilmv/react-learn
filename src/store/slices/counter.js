import {createSlice} from '@reduxjs/toolkit';
 
const initialState = {
    counterVal : 0,
}

const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment:(state) =>{
            state.counterVal += 1;
        },
        decrement:(state) =>{
            state.counterVal -= 1;
        },
    }
});

export const {increment,decrement} = counterSlice.actions;
export default counterSlice.reducer;