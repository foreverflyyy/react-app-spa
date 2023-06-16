import {call, delay, put, takeEvery} from "redux-saga/effects";
import {REQUEST_USER_OF_POST} from "../types";
import {IUser} from "../../models/IUser";
import {
    ActionUserOfPostFailed,
    ActionUserOfPostSuccess,
    IFetchUserOfPost,
    StartActionUserOfPost
} from "../actions/user/userOfPostActions";
import axios, {AxiosResponse} from "axios";

export function* sagaUserOfPostWatcher() {
    yield takeEvery(REQUEST_USER_OF_POST, getUserById)
}

function* getUserById({payload: {idUser}}: IFetchUserOfPost) {
    try {
        yield put(StartActionUserOfPost())
        const payload: AxiosResponse = yield call(fetchUserById, idUser)
        yield delay(500)
        yield put(ActionUserOfPostSuccess(payload.data[0]))
    } catch (err: any) {
        yield put(ActionUserOfPostFailed(err?.message))
    }
}

const fetchUserById = (id: string) => {
    return axios.get<IUser>("https://jsonplaceholder.typicode.com/users", {
        params: {
            id
        }
    });
}