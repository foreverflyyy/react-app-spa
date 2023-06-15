import {IUser} from "../../models/IUser";
import {
    REQUEST_COMMENTS,
    REQUEST_USER_OF_POST_FAILED,
    REQUEST_USER_OF_POST_SUCCESS,
    START_USER_OF_POST
} from "../types";

interface IStartActionUserOfPost {
    type: string,
    payload: boolean
}

export const StartActionUserOfPost = (): IStartActionUserOfPost => {
   return {
        type: START_USER_OF_POST,
       payload: true
   }
}

interface IActionUserOfPostFailed {
   type: string,
   payload: string
}

export const ActionUserOfPostFailed = (error: string): IActionUserOfPostFailed => {
   return {
      type: REQUEST_USER_OF_POST_FAILED,
      payload: error
   }
}

interface IActionUserOfPostSuccess {
   type: string,
   payload: IUser
}

export const ActionUserOfPostSuccess = (user: IUser): IActionUserOfPostSuccess => {
   return {
      type: REQUEST_USER_OF_POST_SUCCESS,
      payload: user
   }
}

export type TypesActionsUser = IStartActionUserOfPost | IActionUserOfPostFailed | IActionUserOfPostSuccess;

export interface IFetchUser {
    type: string,
    payload: {
        idUser: number
    }
}

export function fetchUser(idUser: number): IFetchUser {
    return {
        type: REQUEST_COMMENTS,
        payload: {
            idUser
        }
    }
}