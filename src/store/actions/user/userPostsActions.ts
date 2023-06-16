import {
    REQUEST_USER_POSTS,
    REQUEST_USER_POSTS_FAILED,
    REQUEST_USER_POSTS_SUCCESS,
    START_USERS_POSTS
} from "../../types";
import IPost from "../../../models/IPost";
import {IActionUserFailed, IStartActionUser} from "./userOfPostActions";

interface IActionUserPostsSuccess {
    type: string,
    payload: IPost[]
}

export interface IFetchUserPosts {
    type: string,
    payload: {
        idUser: string
    }
}

export const StartActionUserPosts = (): IStartActionUser => {
    return {
        type: START_USERS_POSTS
    }
}

export const ActionUserPostsSuccess = (posts: IPost[]): IActionUserPostsSuccess => {
    return {
        type: REQUEST_USER_POSTS_SUCCESS,
        payload: posts
    }
}

export const ActionUserPostsFailed = (error: string): IActionUserFailed => {
    return {
        type: REQUEST_USER_POSTS_FAILED,
        payload: error
    }
}

export function fetchUserPosts(idUser: string): IFetchUserPosts {
    return {
        type: REQUEST_USER_POSTS,
        payload: {
            idUser
        }
    }
}