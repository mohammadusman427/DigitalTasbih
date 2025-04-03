import AsyncStorage from "@react-native-async-storage/async-storage";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import userSlice from "./userSlice";
const persistConfig = {
  key: "root",
  version: 1,
  storage: AsyncStorage,
};
const rootReducer = combineReducers({
  userReducer: userSlice,
});
const persistedRootReducer = persistReducer(persistConfig, rootReducer);
export default persistedRootReducer;
