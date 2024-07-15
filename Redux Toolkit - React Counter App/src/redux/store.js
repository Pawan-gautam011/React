import {configureStore} from "@reactjs/toolkit";
import { counterReducer } from "./counterSlice";



export default configureStore({
    reducer:{
        counter:counterReducer,

    }
})























