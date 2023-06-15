import {call, put, takeEvery} from 'redux-saga/effects'
import {REQUEST_POSTS} from "../types";
import IPost from "../../models/IPost";
import {ActionGetPostFailed, ActionGetPostsSuccess, StartActionGetPosts} from "../actions/postsActions";

export function* sagaPostsWatcher() {
    yield takeEvery(REQUEST_POSTS, getPosts)
}

function* getPosts() {
    try {
        yield put(StartActionGetPosts())
        const payload: IPost[] = yield call(fetchPosts)
        setTimeout(async () => {
            console.log('Process going...')
        }, 500)
        yield put(ActionGetPostsSuccess(payload))
    } catch (e: any) {
        yield put(ActionGetPostFailed(e?.message))
    }
}

async function fetchPosts() {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=40`);
    return await response.json()
}