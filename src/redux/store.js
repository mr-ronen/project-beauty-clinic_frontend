import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import rootReducer from './reducers';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth'] // You can add other slices to persist here
};

const persistedReducer = persistReducer(persistConfig, rootReducer);


export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store, null, () => {
  console.log('Rehydration complete');
});