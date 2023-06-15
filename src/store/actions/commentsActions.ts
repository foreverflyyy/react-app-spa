import IComment from "../../models/IComment"
import {REQUEST_COMMENTS, REQUEST_COMMENTS_FAILED, REQUEST_COMMENTS_SUCCESS, START_COMMENTS_BY_POST} from "../types"

interface IStartActionCommentsByPost {
    type: string,
    payload: boolean
}

export const StartActionCommentsByPost = (): IStartActionCommentsByPost => {
   return {
        type: START_COMMENTS_BY_POST,
        payload: true
   }
}

interface IActionCommentsByPostFailed {
  type: string,
  payload: string
}

export const ActionCommentsByPostFailed = (error: string): IActionCommentsByPostFailed => {
   return {
      type: REQUEST_COMMENTS_FAILED,
      payload: error
   }
}

interface IActionCommentsByPostSuccess {
  type: string,
  payload: IComment[]
}

export const ActionCommentsByPostSuccess = (comments: IComment[]): IActionCommentsByPostSuccess => {
   return {
      type: REQUEST_COMMENTS_SUCCESS,
      payload: comments
   }
}

export type TypesActionsComments = IStartActionCommentsByPost | IActionCommentsByPostFailed | IActionCommentsByPostSuccess;

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
