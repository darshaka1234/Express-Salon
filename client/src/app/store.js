import { combineReducers, configureStore } from "@reduxjs/toolkit";
import allUsersSlice from "../features/allUsersSlice";
import mobileReducer from "../features/mobileSlice";
import userSlice from "../features/userSlice";
import numberReducer from "../features/numberSlice";
import selectReducer from "../features/selectSlice";
import serviceReducer from "../features/serviceSlice";
import currentAppointmentReducer from "../features/currentAppointmentSlice";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";
const persistConfig = {
  key: "root",
  storage,
};

const rootReducer = combineReducers({
  mobile: mobileReducer,
  allUsers: allUsersSlice,
  user: userSlice,
  select: selectReducer,
  allServices: serviceReducer,
  currentAppointment: currentAppointmentReducer,
  number: numberReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});

export const persistor = persistStore(store);
