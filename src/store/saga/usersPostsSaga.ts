import {call, delay, put, takeEvery} from "redux-saga/effects";
import {REQUEST_USER_POSTS} from "../types";
import axios, {AxiosResponse} from "axios";
import IPost from "../../models/IPost";
import {
    ActionUserPostsFailed,
    ActionUserPostsSuccess,
    IFetchUserPosts,
    StartActionUserPosts
} from "../actions/user/userPostsActions";

export function* sagaUserPostsWatcher() {
    yield takeEvery(REQUEST_USER_POSTS, getUserPosts);
}

function* getUserPosts({payload: {idUser}}: IFetchUserPosts) {
    try {
        yield put(StartActionUserPosts());
        const payload: AxiosResponse = yield call(fetchUserPosts, idUser);
        yield delay(500);
        yield put(ActionUserPostsSuccess(payload.data));
    } catch (err: any) {
        yield put(ActionUserPostsFailed(err?.message));
    }
}

const fetchUserPosts = (userId: string) => {
    return axios.get<IPost[]>("https://jsonplaceholder.typicode.com/posts", {
        params: {
            userId
        }
    });
}