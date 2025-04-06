import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import orderReducer from "./slices/orderSlice";

const persistConfig = {
    key: "order",
    storage,
};

const persistedOrderReducer = persistReducer(persistConfig, orderReducer);

export const store = configureStore({
    reducer: {
        // creating order state in Redux Store
        order: persistedOrderReducer,
    }
});

export const persistor = persistStore(store);