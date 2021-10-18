import thunk from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import reducers from './reducers';

const persistConfig = {
  key: 'root',
  whitelist: ['auth'],
  storage,
};

const rootReducer = combineReducers(reducers);

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store: any = createStore(persistedReducer, applyMiddleware(thunk));
export const persistor = persistStore(store);

export type IRootState = ReturnType<typeof rootReducer>;
