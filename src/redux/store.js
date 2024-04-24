import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { contactsReducer } from './contactsSlice';
import { filtersReducer } from './filtersSlice';

const contactsPersistConfig = {
  key: 'contact',
  storage,
  whitelist: ['contacts'],
};

const filtersPersistConfig = {
  key: 'filter',
  storage,
  whitelist: ['filter'],
};
export const store = configureStore({
  reducer: {
    contact: persistReducer(contactsPersistConfig, contactsReducer),
    filter: persistReducer(filtersPersistConfig, filtersReducer),
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
