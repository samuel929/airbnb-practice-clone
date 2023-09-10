import { configureStore , combineReducers } from '@reduxjs/toolkit';
import counterReducer from '../Slices/slice';
import popupReducer from '../Slices/popup';
import loginPopupReducer from '../Slices/loginPopUp';
const rootReducer = combineReducers({
    counter: counterReducer,
    popup: popupReducer,
    loginPopUp:loginPopupReducer
  });
  

const store = configureStore({
    reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;