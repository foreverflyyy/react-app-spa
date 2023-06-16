import IPost from "../../models/IPost";
import {REQUEST_USER_POSTS_FAILED, REQUEST_USER_POSTS_SUCCESS, START_USERS_POSTS} from "../types";

interface IUserReducerState {
    userPosts: IPost[],
    isLoading: boolean;
    error: string
}

const initialState: IUserReducerState  = {
    userPosts: [],
    isLoading: false,
    error: ''
}

export const userPostsReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case START_USERS_POSTS:
            return {
                ...state,
                isLoading: true
            };
        case REQUEST_USER_POSTS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                userPosts: action.payload
            }
        case REQUEST_USER_POSTS_FAILED:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        default:
            return state;
    }
}