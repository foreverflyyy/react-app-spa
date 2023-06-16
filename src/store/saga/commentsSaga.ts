import {call, delay, put, takeEvery} from "redux-saga/effects";
import IComment from "../../models/IComment";
import {REQUEST_COMMENTS} from "../types";
import {
    ActionCommentsByPostFailed,
    ActionCommentsByPostSuccess,
    IFetchComments,
    StartActionCommentsByPost
} from '../actions/commentsActions'
import axios, {AxiosResponse} from "axios";

export function* sagaCommentsWatcher() {
    yield takeEvery(REQUEST_COMMENTS, getComments)
}

function* getComments({payload: {idPost}}: IFetchComments) {
    try {
        yield put(StartActionCommentsByPost())
        const payload: AxiosResponse = yield call(fetchComments, idPost);
        yield delay(500)
        yield put(ActionCommentsByPostSuccess(payload.data));
    } catch (e: any) {
        yield put(ActionCommentsByPostFailed(e?.message))
    }
}

const fetchComments = (idPost: string) => {
    return axios.get<IComment[]>("https://jsonplaceholder.typicode.com/comments", {
        params: {
            postId: idPost
        }
    });
}