import IPost from "../../models/IPost";
import {REQUEST_POSTS_FAILED, REQUEST_POSTS_SUCCESS, START_POSTS} from "../types";

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

export const postsReducer = (state = initialState, action: any) => {
    switch (action.type) {
      case START_POSTS:
            return {
               ...state, 
               isLoading: true
            };
      case REQUEST_POSTS_SUCCESS:
          console.log(action)
         return {
            ...state, 
            isLoading: false,
            posts: action.payload
         };
      case REQUEST_POSTS_FAILED:
         return {
            ...state, 
            isLoading: false,
            error: action.payload
         };
      default:
         return state;
    }
}