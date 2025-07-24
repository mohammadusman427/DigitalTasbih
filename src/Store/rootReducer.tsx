import AsyncStorage from "@react-native-async-storage/async-storage";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import userSlice from "./userSlice";
import tasbihSlice from "./tasbihSlice";

const persistConfig = {
  key: "root",
  version: 1,
  storage: AsyncStorage,
};

const rootReducer = combineReducers({
  userReducer: userSlice,
  tasbihReducer: tasbihSlice,
});

const persistedRootReducer = persistReducer(persistConfig, rootReducer);
export default persistedRootReducer;
