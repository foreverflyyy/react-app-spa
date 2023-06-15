import {call, put, takeEvery} from "redux-saga/effects";
import {REQUEST_USER_OF_POST} from "../types";
import {IUser} from "../../models/IUser";
import {
    ActionUserOfPostFailed,
    ActionUserOfPostSuccess,
    IFetchUser,
    StartActionUserOfPost
} from "../actions/userActions";

export function* sagaCommentsWatcher() {
    yield takeEvery(REQUEST_USER_OF_POST, getUserById)
}

function* getUserById({payload: {idUser}}: IFetchUser) {
    try {
        yield put(StartActionUserOfPost())
        const payload: IUser = yield call(fetchUserById, idUser)
        setTimeout(async () => {
            console.log('Process user going...')
        }, 500)
        yield put(ActionUserOfPostSuccess(payload))
    } catch (err: any) {
        yield put(ActionUserOfPostFailed(err?.message))
    }
}

async function fetchUserById(idUser: number) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users?id=${idUser}`);
    return await response.json();
}