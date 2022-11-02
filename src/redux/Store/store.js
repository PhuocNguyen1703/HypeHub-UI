import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import authReducer from '../Slice/authSlice';
import calendarReducer from '../Slice/calendarSlice';
import modalReducer from '../Slice/modalSlice';
import layoutReducer from '../Slice/layoutSlice';
import themeReducer from '../Slice/themeSlice';
import emailReducer from '../Slice/emailSlice';
import todoReducer from '../Slice/todoSlice';

const persistConfig = {
    key: 'root',
    version: 1,
    storage,
    blacklist: ['calendar', 'modal', 'email', 'todo', 'kanban'],
};

const rootReducer = combineReducers({
    auth: authReducer,
    calendar: calendarReducer,
    modal: modalReducer,
    layout: layoutReducer,
    theme: themeReducer,
    email: emailReducer,
    todo: todoReducer,
});
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

export let persistor = persistStore(store);
