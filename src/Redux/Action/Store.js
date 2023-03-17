import { legacy_createStore as createStore } from "redux";
import  RootReducer from "./Reducer/Reducer";

let Store=createStore(
    RootReducer
)
export default Store;