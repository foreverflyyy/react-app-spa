import {call, delay, put, takeEvery} from 'redux-saga/effects'
import {REQUEST_POSTS} from "../types";
import {ActionGetPostFailed, ActionGetPostsSuccess, StartActionGetPosts} from "../actions/postsActions";
import axios, {AxiosResponse} from "axios";
import IPost from "../../models/IPost";

export function* sagaPostsWatcher() {
    yield takeEvery(REQUEST_POSTS, getPosts)
}

function* getPosts() {
    try {
        yield put(StartActionGetPosts())
        const payload: AxiosResponse= yield call(fetchPosts)
        yield delay(500)
        yield put(ActionGetPostsSuccess(payload.data))
    } catch (e: any) {
        yield put(ActionGetPostFailed(e?.message))
    }
}

const fetchPosts = () =>
    axios.get<IPost[]>("https://jsonplaceholder.typicode.com/posts?_limit=40")
