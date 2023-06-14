import {GET_COMMENTS_BY_POST, GET_POSTS, REQUEST_COMMENTS, REQUEST_POSTS} from "../types";
import IPost from "../../models/IPost";
import IComment from "../../models/IComment";

export function getPosts(){
    return {
        type: GET_POSTS,
        payload: [] as IPost[],
    }
}

export function fetchPosts(){
    return {
        type: REQUEST_POSTS
    }
}

export function getCommentsByPost(){
    return {
        type: GET_COMMENTS_BY_POST,
        payload: [] as IComment[]
    }
}

export interface IFetchComments {
    type: string,
    payload: {
        idPost: string
    }
}

export function fetchComments(idPost: string){
    return {
        type: REQUEST_COMMENTS,
        payload: {
            idPost
        }
    }
}

