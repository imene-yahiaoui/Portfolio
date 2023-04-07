import { configureStore } from "@reduxjs/toolkit";
import useReducer from "./helpers/features/filtreSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import thunk from "redux-thunk";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, useReducer);

export const store = configureStore({
  reducer: {
    filtre: persistedReducer,
  },
  middleware: [thunk],
});
export const persistor = persistStore(store);
