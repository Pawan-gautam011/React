import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./services/counterSlice"
const store = configureStore ({
    reducer:{
        counter: counterReducer,

    },
});

export default store;
