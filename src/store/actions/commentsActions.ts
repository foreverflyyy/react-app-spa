import IComment from "../../models/IComment"
import { REQUEST_COMMENTS } from "../types"

export interface IFetchComments {
   type: string,
   payload: {
       idPost: string
   }
}

interface ActionGetCommentsByPost {
  type: string,
  payload: IComment[]
}

interface ActionCommentsFailed {
  type: string,
  payload: string
}

interface ActionCommentsLoading {
  type: string,
  payload: boolean
}

export type ActionsCommentsTypes = ActionGetCommentsByPost | ActionCommentsFailed | ActionCommentsLoading;

export function fetchComments(idPost: string){
   return {
       type: REQUEST_COMMENTS,
       payload: {
           idPost
       }
   }
}
