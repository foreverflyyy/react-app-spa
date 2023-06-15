import {call, put, takeEvery} from "redux-saga/effects";
import {REQUEST_USER_OF_POST} from "../types";
import { IUser } from "../../models/IUser";
import { 
   GetUserOfPostFailed, 
   GetUserOfPostSuccess, 
   IFetchUser, 
   StartActionGetUserOfPost 
} from "../actions/userActions";

export function* sagaCommentsWatcher() {
    yield takeEvery(REQUEST_USER_OF_POST, getUserById)
}

function* getUserById({payload: {idUser}}: IFetchUser) {
    try {
        yield put(StartActionGetUserOfPost())
        const payload: IUser = yield call(fetchUserById, idUser)
        setTimeout(async () => {
            console.log('Process going...')
        }, 500)
        yield put(GetUserOfPostSuccess(payload))
    } catch (err: any) {
        yield put(GetUserOfPostFailed(err?.message))
    }
}

async function fetchUserById(idUser: number) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users?id=${idUser}`);
    return await response.json();
}