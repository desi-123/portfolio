import { applyMiddleware, combineReducers, createStore } from "redux"
import logger from "redux-logger";
import thunk from "redux-thunk";
import { About } from "./about";
import { Education } from "./education";
import { Home } from "./home";


export const configureStore = () => {
    const store = createStore(
        combineReducers({
            home: Home,
            about: About,
            education: Education
        }),
        applyMiddleware(thunk, logger)
    );
    return store;
};