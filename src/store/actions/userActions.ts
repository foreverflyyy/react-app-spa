import { IUser } from "../../models/IUser";
import {REQUEST_COMMENTS, REQUEST_USER_OF_POST, REQUEST_USER_OF_POST_FAILED, REQUEST_USER_OF_POST_SUCCESS} from "../types";

export interface IFetchUser {
    type: string,
    payload: {
      idUser: number
    }
}

interface ActionGetUserOfPost {
   type: string,
   payload: boolean
}

export const StartActionGetUserOfPost = (): ActionGetUserOfPost => {
   return {
      type: REQUEST_USER_OF_POST,
      payload: true
   }
}

interface ActionUserOfPostFailed {
   type: string,
   payload: string
}

export const GetUserOfPostFailed = (error: string): ActionUserOfPostFailed => {
   return {
      type: REQUEST_USER_OF_POST_FAILED,
      payload: error
   }
}

interface ActionUserOfPostSuccess {
   type: string,
   payload: IUser
}

export const GetUserOfPostSuccess = (user: IUser): ActionUserOfPostSuccess => {
   return {
      type: REQUEST_USER_OF_POST_SUCCESS,
      payload: user
   }
}

export type ActionsUserTypes = ActionGetUserOfPost | ActionUserOfPostFailed | ActionUserOfPostSuccess;

export function fetchUser(idUser: number){
    return {
        type: REQUEST_COMMENTS,
        payload: {
            idUser
        }
    }
}