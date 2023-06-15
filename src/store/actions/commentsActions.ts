import IComment from "../../models/IComment"
import {REQUEST_COMMENTS, REQUEST_COMMENTS_FAILED, REQUEST_COMMENTS_SUCCESS, START_COMMENTS_BY_POST} from "../types"

function inferLiteralFromString<T extends string>(arg: T): T {
    return arg;
}

export interface IStartActionCommentsByPost {
    type: string
}

export const StartActionCommentsByPost = (): IStartActionCommentsByPost => {
   return {
        type: inferLiteralFromString(START_COMMENTS_BY_POST)
   }
}

export interface IActionCommentsByPostFailed {
  type: string,
  payload: string
}

export const ActionCommentsByPostFailed = (error: string): IActionCommentsByPostFailed => {
   return {
      type: inferLiteralFromString(REQUEST_COMMENTS_FAILED),
      payload: error
   }
}

export interface IActionCommentsByPostSuccess {
  type: string,
  payload: IComment[]
}

export const ActionCommentsByPostSuccess = (comments: IComment[]): IActionCommentsByPostSuccess => {
   return {
      type: inferLiteralFromString(REQUEST_COMMENTS_SUCCESS),
      payload: comments
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
