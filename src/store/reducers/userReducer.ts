import { IUser } from "../../models/IUser";
import { ActionsUserTypes } from "../actions/userActions";
import {GET_USER_OF_POST, HIDE_LOADER, SHOW_LOADER, USER_FAILED} from "../types";

interface IUserReducerState {
    user: IUser | null,
    isLoading: boolean;
    error: string
}

const initialState: IUserReducerState  = {
    user: null,
    isLoading: false,
    error: ''
}

export const userReducer = (state = initialState, action: ActionsUserTypes) => {
    switch (action.type) {
        case GET_USER_OF_POST:
            return {...state, user: action.payload };
         case SHOW_LOADER:
               return {...state, loading: action.payload}
         case HIDE_LOADER:
            return {...state, loading: action.payload}
         case USER_FAILED:
            return {...state, error: action.payload}
        default:
            return state;
    }
}