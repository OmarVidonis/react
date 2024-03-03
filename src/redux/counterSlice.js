import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name:"counter",
    initialState:{
        value:0,
    },
    reducers:{
        increment: (state) =>{
            state.value++;
        },
        decrement: (state) =>{
            state.value--;
        },
        incrementByValue: (state, action) =>{
            if(!isNaN(action.payload)){
                state.value+=action.payload
            }
            document.querySelector("input").value=""
        },
    },
})

export const {increment, decrement, incrementByValue} = counterSlice.actions;

export const counterReducer = counterSlice.reducer;