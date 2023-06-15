import IPost from "../../models/IPost";
import {TypesActionsPosts} from "../actions/postsActions";
import {REQUEST_COMMENTS_FAILED, REQUEST_COMMENTS_SUCCESS, START_POSTS} from "../types";

interface IPostReducerState {
    posts: IPost[],
    isLoading: boolean;
    error: string
}

const initialState:IPostReducerState  = {
    posts: [],
    isLoading: false,
    error: ''
}

export const postsReducer = (state = initialState, action: TypesActionsPosts) => {
    switch (action.type) {
      case START_POSTS:
            return {
               ...state, 
               isLoading: true
            };
      case REQUEST_COMMENTS_SUCCESS:
         return {
            ...state, 
            isLoading: false,
            posts: action.payload
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