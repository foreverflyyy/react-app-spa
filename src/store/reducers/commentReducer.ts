import {COMMENTS_FAILED, GET_COMMENTS_BY_POST, HIDE_LOADER, SHOW_LOADER} from "../types";
import IComment from "../../models/IComment";
import { ActionsCommentsTypes } from "../actions/commentsActions";

interface ICommentsReducerState {
    commentsByPost: IComment[],
    isLoading: boolean;
    error: string
}

const initialState: ICommentsReducerState = {
    commentsByPost: [],
    isLoading: false,
    error: ''
}

export const commentsReducer = (state = initialState, action: ActionsCommentsTypes) => {
    switch (action.type) {
         case GET_COMMENTS_BY_POST:
            return {...state, commentsByPost: action.payload };
         case SHOW_LOADER:
            return {...state, isLoading: action.payload };
         case HIDE_LOADER:
            return {...state, isLoading: action.payload };
         case COMMENTS_FAILED:
               return {...state, error: action.payload}
         default:
            return state;
    }
}