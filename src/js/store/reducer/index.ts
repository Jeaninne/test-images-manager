import { combineReducers } from "redux";
import appInfo from "./appReducer";
import imagesData from "./imagesReducer";

const rootReducer = combineReducers({appInfo, imagesData});

export default rootReducer;