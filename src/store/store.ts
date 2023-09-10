import { configureStore , combineReducers } from '@reduxjs/toolkit';
import counterReducer from '../Slices/slice';
import popupReducer from '../Slices/popup';

const rootReducer = combineReducers({
    counter: counterReducer,
    popup: popupReducer,
    // Add more reducers as needed
  });
  

const store = configureStore({
    reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;