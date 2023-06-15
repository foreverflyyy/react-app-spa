import IPost from "../../models/IPost";
import { ActionsPostsTypes } from "../actions/postsActions";
import {GET_POSTS, REQUEST_COMMENTS_FAILED, REQUEST_COMMENTS_SUCCESS} from "../types";

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

export const postsReducer = (state = initialState, action: ActionsPostsTypes) => {
    switch (action.type) {
      case GET_POSTS:
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