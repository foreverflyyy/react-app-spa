import IPost from "../../models/IPost";
import {REQUEST_POSTS} from "../types";

interface ActionGetPosts {
   type: string,
   payload: boolean
 }
 
 interface ActionPostsFailed {
   type: string,
   payload: string
 }
 
 interface ActionPostsSuccess {
   type: string,
   payload: IPost[]
 }
 
 export type ActionsPostsTypes = ActionGetPosts | ActionPostsFailed | ActionPostsSuccess;

export function fetchPosts(){
    return {
        type: REQUEST_POSTS
    }
}
