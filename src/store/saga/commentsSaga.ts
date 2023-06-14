import {call, put, takeEvery} from "redux-saga/effects";
import {hideLoader, showLoader} from "../actions/appActions";
import IComment from "../../models/IComment";
import {COMMENTS_FAILED, GET_COMMENTS_BY_POST, REQUEST_COMMENTS} from "../types";
import {IFetchComments} from '../actions/commentsActions'

export function* sagaCommentsWatcher() {
    yield takeEvery(REQUEST_COMMENTS, getComments)
}

function* getComments({payload: {idPost}}: IFetchComments) {
    try {
        yield put(showLoader())
        const payload: IComment[] = yield call(fetchComments, idPost)
        setTimeout(async () => {
            console.log('Process going...')
        }, 500)
        yield put({ type: GET_COMMENTS_BY_POST, payload})
        yield put(hideLoader())
    } catch (e) {
        yield put({ type: COMMENTS_FAILED, message: e })
        yield put(hideLoader())
    }
}

async function fetchComments(idPost: string) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${idPost}`);
    return await response.json();
}