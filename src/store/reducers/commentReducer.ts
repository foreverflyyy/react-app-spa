import {GET_COMMENTS_BY_POST, HIDE_LOADER, SHOW_LOADER} from "../types";
import IComment from "../../models/IComment";

interface ICommenttReducerState {
    commentsByPost: IComment[],
    isLoading: boolean;
    error: string
}

const initialState: ICommenttReducerState = {
    commentsByPost: [],
    isLoading: false,
    error: ''
}

interface ActionComments {
    type: string,
    payload: IComment[]
}

export const commentsReducer = (state = initialState, action: ActionComments) => {
    switch (action.type) {
        case GET_COMMENTS_BY_POST:
            return {...state, commentsByPost: action.payload };
        case SHOW_LOADER:
            return {...state, isLoading: true };
        case HIDE_LOADER:
            return {...state, isLoading: false };
        default:
            return state;
    }
}
