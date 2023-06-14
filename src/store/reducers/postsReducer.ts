import IPost from "../../models/IPost";
import {GET_POSTS} from "../types";

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

interface ActionPosts {
    type: string,
    payload: IPost[]
}

export const postsReducer = (state = initialState, action: ActionPosts) => {
    switch (action.type) {
        case GET_POSTS:
            return {...state, posts: action.payload };
        default:
            return state;
    }
}