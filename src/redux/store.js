import { devToolsEnhancer } from '@redux-devtools/extension';
import { createStore, combineReducers } from 'redux';
import { contactFormReducer } from './contactFormReducer';
import { contactListReducer } from './contactListReducer';

const rootReducer = combineReducers({
  contactForm: contactFormReducer,
  contactList: contactListReducer,
});

const enhancer = devToolsEnhancer();
export const store = createStore(rootReducer, enhancer);
