import IPost from "../../models/IPost";
import {REQUEST_POSTS, REQUEST_POSTS_FAILED, REQUEST_POSTS_SUCCESS, START_POSTS} from "../types";

export interface IStartActionGetPosts {
    type: string
}

export const StartActionGetPosts = (): IStartActionGetPosts => {
    return {
        type: START_POSTS
    }
}
 
 export interface IActionGetPostsFailed {
   type: string,
   payload: string
 }

export const ActionGetPostFailed = (error: string): IActionGetPostsFailed => {
    return {
        type: REQUEST_POSTS_FAILED,
        payload: error
    }
}
 
 export interface IActionPostsSuccess {
   type: string,
   payload: IPost[]
 }

export const ActionGetPostsSuccess = (posts: IPost[]): IActionPostsSuccess => {
    return {
        type: REQUEST_POSTS_SUCCESS,
        payload: posts
    }
}

export const fetchPosts = () => ({
    type: REQUEST_POSTS
})
