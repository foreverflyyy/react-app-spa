import {call, put, takeEvery} from 'redux-saga/effects'
import {GET_POSTS, POSTS_FAILED, REQUEST_POSTS} from "../types";
import IPost from "../../models/IPost";

export function* sagaPostsWatcher() {
    yield takeEvery(REQUEST_POSTS, getPosts)
}

function* getPosts() {
    try {
        yield put(showLoader())
        const payload: IPost[] = yield call(fetchPosts)
        setTimeout(async () => {
            console.log('Process going...')
        }, 500)
        yield put({ type: GET_POSTS, payload})
        yield put(hideLoader())
    } catch (e) {
        yield put({ type: POSTS_FAILED, message: e })
        yield put(hideLoader())
    }
}

async function fetchPosts() {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=40`);
    return await response.json()
}