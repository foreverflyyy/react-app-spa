import {IUser} from "../../../models/IUser";
import {
    REQUEST_USER_OF_POST,
    REQUEST_USER_OF_POST_FAILED,
    REQUEST_USER_OF_POST_SUCCESS,
    START_USER_OF_POST
} from "../../types";

export interface IStartActionUser {
    type: string
}

export interface IActionUserFailed {
    type: string,
    payload: string
}

interface IActionUserOfPostSuccess {
    type: string,
    payload: IUser
}

export type TypesActionsUser = IStartActionUser | IActionUserFailed | IActionUserOfPostSuccess;

export interface IFetchUserOfPost {
    type: string,
    payload: {
        idUser: string
    }
}

export const StartActionUserOfPost = (): IStartActionUser => {
   return {
        type: START_USER_OF_POST
   }
}

export const ActionUserOfPostFailed = (error: string): IActionUserFailed => {
   return {
      type: REQUEST_USER_OF_POST_FAILED,
      payload: error
   }
}

export const ActionUserOfPostSuccess = (user: IUser): IActionUserOfPostSuccess => {
   return {
      type: REQUEST_USER_OF_POST_SUCCESS,
      payload: user
   }
}

export function fetchUserOfPost(idUser: string): IFetchUserOfPost {
    return {
        type: REQUEST_USER_OF_POST,
        payload: {
            idUser
        }
    }
}