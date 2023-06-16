import {REQUEST_COMMENTS_FAILED, REQUEST_COMMENTS_SUCCESS, START_COMMENTS_BY_POST} from "../types";
import IComment from "../../models/IComment";

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

export const commentsReducer = (state: ICommentsReducerState = initialState, action: any) => {
    switch (action.type) {
         case START_COMMENTS_BY_POST:
            return {
               ...state, 
               isLoading: true 
            };
        case REQUEST_COMMENTS_SUCCESS:
            return {
               ...state,
                isLoading: false,
                commentsByPost: action.payload,
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