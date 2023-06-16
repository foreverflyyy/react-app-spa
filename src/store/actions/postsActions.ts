import IPost from "../../models/IPost";
import {REQUEST_POSTS, REQUEST_POSTS_FAILED, REQUEST_POSTS_SUCCESS, START_POSTS} from "../types";

export interface IStartActionGetPosts {
    type: string
}

export interface IActionGetPostsFailed {
    type: string,
    payload: string
}

export interface IActionPostsSuccess {
    type: string,
    payload: IPost[]
}

export type TypesActionsPosts = IActionPostsSuccess | IActionGetPostsFailed | IStartActionGetPosts;

export interface IFetchPosts {
    type: string,
    payload: {
        limit: number,
        page: number
    }
}

export const StartActionGetPosts = (): IStartActionGetPosts => {
    return {
        type: START_POSTS
    }
}

export const ActionGetPostFailed = (error: string): IActionGetPostsFailed => {
    return {
        type: REQUEST_POSTS_FAILED,
        payload: error
    }
}

export const ActionGetPostsSuccess = (posts: IPost[]): IActionPostsSuccess => {
    return {
        type: REQUEST_POSTS_SUCCESS,
        payload: posts
    }
}

export const fetchPosts = (limit: number, page: number): IFetchPosts => ({
    type: REQUEST_POSTS,
    payload: {
        limit,
        page
    }
})
