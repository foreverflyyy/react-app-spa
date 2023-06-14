import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {postsReducer} from "./reducers/postsReducer";
import createSagaMiddleware from 'redux-saga'
import {sagaPostsWatcher} from "./saga/postsSaga";
import thunk from "redux-thunk";
import {commentsReducer} from "./reducers/commentReducer";
import {sagaCommentsWatcher} from "./saga/commentsSaga";
import {appReducer} from "./reducers/appReducer";

const sagaMiddleware = createSagaMiddleware()

const rootReducers = combineReducers({
    posts: postsReducer,
    comment: commentsReducer,
    app: appReducer
})

export const store = configureStore({
    reducer: rootReducers,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware, thunk),
})

sagaMiddleware.run(sagaPostsWatcher)
sagaMiddleware.run(sagaCommentsWatcher)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;