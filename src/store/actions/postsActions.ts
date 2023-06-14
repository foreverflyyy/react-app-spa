import IPost from "../../models/IPost";
import {REQUEST_POSTS} from "../types";

interface ActionGetPosts {
   type: string,
   payload: IPost[]
 }
 
 interface ActionPostsFailed {
   type: string,
   payload: string
 }
 
 interface ActionPostsLoading {
   type: string,
   payload: boolean
 }
 
 export type ActionsPostsTypes = ActionGetPosts | ActionPostsFailed | ActionPostsLoading;

export function fetchPosts(){
    return {
        type: REQUEST_POSTS
    }
}
