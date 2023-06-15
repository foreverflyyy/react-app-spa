import {call, put, takeEvery} from "redux-saga/effects";
import IComment from "../../models/IComment";
import {REQUEST_COMMENTS} from "../types";
import {
    ActionCommentsByPostFailed,
    ActionCommentsByPostSuccess,
    IFetchComments,
    StartActionCommentsByPost
} from '../actions/commentsActions'

export function* sagaCommentsWatcher() {
    yield takeEvery(REQUEST_COMMENTS, getComments)
}

function* getComments({payload: {idPost}}: IFetchComments) {
    try {
        yield put(StartActionCommentsByPost())
        const payload: IComment[] = yield call(fetchComments, idPost)
        setTimeout(async () => {
            console.log('Process going...')
        }, 500)
        yield put(ActionCommentsByPostSuccess(payload))
    } catch (e: any) {
        yield put(ActionCommentsByPostFailed(e?.message))
    }
}

async function fetchComments(idPost: string) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${idPost}`);
    return await response.json();
}