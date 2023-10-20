// import { devToolsEnhancer } from '@redux-devtools/extension';
// import { createStore, combineReducers } from 'redux';
import { contactFormReducer } from './contactFormReducer';
import { contactListReducer } from './contactListReducer';
import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    contactForm: contactFormReducer,
    contactList: contactListReducer,
  },
});
