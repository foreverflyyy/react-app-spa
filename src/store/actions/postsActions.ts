import IPost from "../../models/IPost";
import {REQUEST_POSTS, REQUEST_POSTS_FAILED, REQUEST_POSTS_SUCCESS, START_POSTS} from "../types";

interface IStartActionGetPosts {
    type: string,
    payload: boolean
 }

export const StartActionGetPosts = (): IStartActionGetPosts => {
    return {
        type: START_POSTS,
        payload: true
    }
}
 
 interface IActionGetPostsFailed {
   type: string,
   payload: string
 }

export const ActionGetPostFailed = (error: string): IActionGetPostsFailed => {
    return {
        type: REQUEST_POSTS_FAILED,
        payload: error
    }
}
 
 interface IActionPostsSuccess {
   type: string,
   payload: IPost[]
 }

export const ActionGetPostsSuccess = (posts: IPost[]): IActionPostsSuccess => {
    return {
        type: REQUEST_POSTS_SUCCESS,
        payload: posts
    }
}
 
export type TypesActionsPosts = IStartActionGetPosts | IActionGetPostsFailed | IActionPostsSuccess;

export function fetchPosts(){
    return {
        type: REQUEST_POSTS
    }
}
