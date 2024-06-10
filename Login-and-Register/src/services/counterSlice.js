import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name:"counter",
    initialState: 0,
    reducers:{
        increaseTheCounter (state){
            state + 1
        },
        
        decreaseTheCounter(state){
             state - 1
        },
        
        incrementByAmount: (state, action) => state + action.payload
    }
})

 export const {increaseTheCounter, decreaseTheCounter, incrementByAmount} = counterSlice.actions

 export default counterSlice.reducer