import {IUser} from "../../models/IUser";
import {
    REQUEST_USER_OF_POST,
    REQUEST_USER_OF_POST_FAILED,
    REQUEST_USER_OF_POST_SUCCESS,
    START_USER_OF_POST
} from "../types";

export interface IStartActionUserOfPost {
    type: string
}

export const StartActionUserOfPost = (): IStartActionUserOfPost => {
   return {
        type: START_USER_OF_POST
   }
}

export interface IActionUserOfPostFailed {
   type: string,
   payload: string
}

export const ActionUserOfPostFailed = (error: string): IActionUserOfPostFailed => {
   return {
      type: REQUEST_USER_OF_POST_FAILED,
      payload: error
   }
}

export interface IActionUserOfPostSuccess {
   type: string,
   payload: IUser
}

export const ActionUserOfPostSuccess = (user: IUser): IActionUserOfPostSuccess => {
   return {
      type: REQUEST_USER_OF_POST_SUCCESS,
      payload: user
   }
}

export interface IFetchUser {
    type: string,
    payload: {
        idUser: number
    }
}

export function fetchUser(idUser: number): IFetchUser {
    return {
        type: REQUEST_USER_OF_POST,
        payload: {
            idUser
        }
    }
}