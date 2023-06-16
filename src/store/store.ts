import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {postsReducer} from "./reducers/postsReducer";
import createSagaMiddleware from 'redux-saga'
import {sagaPostsWatcher} from "./saga/postsSaga";
import {commentsReducer} from "./reducers/commentsReducer";
import {sagaCommentsWatcher} from "./saga/commentsSaga";
import {userOfPostReducer} from "./reducers/userOfPostReducer";
import {sagaUserOfPostWatcher} from "./saga/userOfPostSaga";
import {sagaUserPostsWatcher} from "./saga/usersPostsSaga";
import thunk from "redux-thunk";
import {userPostsReducer} from "./reducers/userPostsReducer";

const sagaMiddleware = createSagaMiddleware()

const rootReducers = combineReducers({
    posts: postsReducer,
    comment: commentsReducer,
    userOfPost: userOfPostReducer,
    userPosts: userPostsReducer
});

export const store = configureStore({
    reducer: rootReducers,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware, thunk),
});

sagaMiddleware.run(sagaPostsWatcher);
sagaMiddleware.run(sagaCommentsWatcher);
sagaMiddleware.run(sagaUserOfPostWatcher);
sagaMiddleware.run(sagaUserPostsWatcher);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;