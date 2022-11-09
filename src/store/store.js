import { configureStore, getDefaultMiddleware  } from '@reduxjs/toolkit';
import {
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist';

import {dataApi} from './dataApi';

const middleware = [
    ...getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
    }),
    dataApi.middleware,
];
const store = configureStore({
    reducer: {
        [dataApi.reducerPath]:  dataApi.reducer,
    },
    middleware,

});

export { store };

