import {call, put, takeEvery} from "redux-saga/effects";
import {hideLoader, showLoader} from "../actions/appActions";
import {GET_COMMENTS_BY_POST, REQUEST_USER_OF_POST, USER_FAILED} from "../types";
import { IFetchUser } from "../actions/userActions";
import { IUser } from "../../models/IUser";

export function* sagaCommentsWatcher() {
    yield takeEvery(REQUEST_USER_OF_POST, getUserById)
}

function* getUserById({payload: {idUser}}: IFetchUser) {
    try {
        yield put(showLoader())
        const payload: IUser = yield call(fetchUserById, idUser)
        setTimeout(async () => {
            console.log('Process going...')
        }, 500)
        yield put({ type: GET_COMMENTS_BY_POST, payload})
        yield put(hideLoader())
    } catch (e) {
        yield put({ type: USER_FAILED, message: e })
        yield put(hideLoader())
    }
}

async function fetchUserById(idUser: number) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users?id=${idUser}`);
    return await response.json();
}