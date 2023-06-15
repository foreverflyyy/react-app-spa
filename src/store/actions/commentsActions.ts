import IComment from "../../models/IComment"
import { REQUEST_COMMENTS, REQUEST_POSTS } from "../types"

export interface IFetchComments {
   type: string,
   payload: {
       idPost: string
   }
}

interface ActionGetCommentsByPost {
  type: string,
  payload: boolean;
}

export const StartActionGetPosts = (): ActionGetCommentsByPost => {
   return {
      type: REQUEST_POSTS,
      payload: true
   }
}

interface ActionCommentsFailed {
  type: string,
  payload: string
}

export const GetUserOfPostFailed = (error: string): ActionUserOfPostFailed => {
   return {
      type: REQUEST_USER_OF_POST_FAILED,
      payload: error
   }
}

interface ActionCommentsSuccess {
  type: string,
  payload: IComment[]
}

export const GetUserOfPostSuccess = (user: IUser): ActionUserOfPostSuccess => {
   return {
      type: REQUEST_USER_OF_POST_SUCCESS,
      payload: user
   }
}

export type ActionsCommentsTypes = ActionGetCommentsByPost | ActionCommentsFailed | ActionCommentsSuccess;

export function fetchComments(idPost: string){
   return {
       type: REQUEST_COMMENTS,
       payload: {
           idPost
       }
   }
}
