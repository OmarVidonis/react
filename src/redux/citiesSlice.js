import { createSlice } from "@reduxjs/toolkit";

export const citiesSlice = createSlice({
    name:"cities",
    initialState: {
        value:[
            {
              id: "1",
              name : "Newyork",
              imgUrl : "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione debitis fugiat alias assumenda, ipsum expedita!",
              isOnline : true,
              isVisited : true,
            },
            {
              id: "2",
              name : "Parigi",
              imgUrl : "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?q=80&w=2020&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione debitis fugiat alias assumenda, ipsum expedita!",
              isOnline : true,
              isVisited : false,
            },
            {
              id: "3",
              name : "Roma",
              imgUrl : "https://images.unsplash.com/photo-1552832230-c0197dd311b5?q=80&w=1996&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione debitis fugiat alias assumenda, ipsum expedita!",
              isOnline : true,
              isVisited : false,
            },
            {
              id: "4",
              name : "Trieste",
              imgUrl : "https://images.unsplash.com/photo-1562943748-8c4a28cb7022?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione debitis fugiat alias assumenda, ipsum expedita!",
              isOnline : true,
              isVisited : false,
            }
        ]
    },
    reducers:{
        add: (state, action) => {
            state.value.push(action.payload);
        },
    },
})

export const {add} =citiesSlice.actions
export const citiesReducer = citiesSlice.reducer