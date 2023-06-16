import IComment from "../../models/IComment"
import {REQUEST_COMMENTS, REQUEST_COMMENTS_FAILED, REQUEST_COMMENTS_SUCCESS, START_COMMENTS_BY_POST} from "../types"

export interface IStartActionCommentsByPost {
    type: string
}

export interface IActionCommentsByPostFailed {
    type: string,
    payload: string
}

export interface IActionCommentsByPostSuccess {
    type: string,
    payload: IComment[]
}

export type TypesActionsComments = IActionCommentsByPostSuccess | IStartActionCommentsByPost | IActionCommentsByPostFailed;

export interface IFetchComments {
    type: string,
    payload: {
        idPost: string
    }
}

export const StartActionCommentsByPost = (): IStartActionCommentsByPost => {
   return {
        type: START_COMMENTS_BY_POST
   }
}

export const ActionCommentsByPostFailed = (error: string): IActionCommentsByPostFailed => {
   return {
      type: REQUEST_COMMENTS_FAILED,
      payload: error
   }
}

export const ActionCommentsByPostSuccess = (comments: IComment[]): IActionCommentsByPostSuccess => {
   return {
      type: REQUEST_COMMENTS_SUCCESS,
      payload: comments
   }
}

export function fetchComments(idPost: string): IFetchComments{
   return {
       type: REQUEST_COMMENTS,
       payload: {
           idPost
       }
   }
}
