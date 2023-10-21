// import { devToolsEnhancer } from '@redux-devtools/extension';
// import { createStore, combineReducers } from 'redux';
import { contactFormReducer } from './contactFormReducer';
import { contactListReducer } from './contactListReducer';
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
import { configureStore } from '@reduxjs/toolkit';

const postDetailsConfig = {
  key: 'postDetails',
  storage,
  whitelist: ['contactsData'],
  //   blacklist: ['filter'],
};

export const store = configureStore({
  reducer: {
    contactForm: persistReducer(postDetailsConfig, contactFormReducer),
    contactList: persistReducer(postDetailsConfig, contactListReducer),
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
