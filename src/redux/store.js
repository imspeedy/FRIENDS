import { createStore, applyMiddleware } from "redux";
import { addFRIENDS } from "./reducer/addFRIENDS.reducer";
import logger from "redux-logger";

export const store = createStore(addFRIENDS, applyMiddleware(logger));
