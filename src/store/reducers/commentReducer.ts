import {GET_COMMENTS_BY_POST, REQUEST_COMMENTS_FAILED, REQUEST_COMMENTS_SUCCESS} from "../types";
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
            return {
               ...state, 
               isLoading: true 
            };
         case REQUEST_COMMENTS_SUCCESS:
            return {
               ...state, 
               commentsByPost: action.payload, 
               isLoading: false
            };
         case REQUEST_COMMENTS_FAILED:
            return {
               ...state, 
               isLoading: false,
               error: action.payload 
            };
         default:
            return state;
    }
}