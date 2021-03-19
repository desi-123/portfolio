import { combineReducers, createStore } from "redux"
import { About } from "./about";
import { Education } from "./education";
import { Home } from "./home";


export const configureStore = () => {
    const store = createStore(
        combineReducers({
            home: Home,
            about: About,
            education: Education
        })
    );
    return store;
};