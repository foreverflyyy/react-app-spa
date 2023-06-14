import IPost from "../../models/IPost";
import { ActionsPostsTypes } from "../actions/postsActions";
import {GET_POSTS, HIDE_LOADER, POSTS_FAILED, SHOW_LOADER} from "../types";

interface IPostReducerState {
    posts: IPost[],
    isLoading: boolean;
    error: string
}

const initialState:IPostReducerState  = {
    posts: [] as IPost[],
    isLoading: false,
    error: ''
}

export const postsReducer = (state = initialState, action: ActionsPostsTypes) => {
    switch (action.type) {
      case GET_POSTS:
            return {...state, posts: action.payload };
      case SHOW_LOADER:
         return {...state, isLoading: action.payload };
      case HIDE_LOADER:
         return {...state, isLoading: action.payload };
      case POSTS_FAILED:
            return {...state, error: action.payload}
      default:
         return state;
    }
}