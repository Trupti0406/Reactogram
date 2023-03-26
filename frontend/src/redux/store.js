import { createStore } from "redux";
import { combineReducer } from "./combineReducer";

export const store = createStore(combineReducer);
