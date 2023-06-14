import { IUser } from "../../models/IUser";
import {REQUEST_COMMENTS} from "../types";

export interface IFetchUser {
    type: string,
    payload: {
      idUser: number
    }
}

interface ActionGetUserOfPost {
   type: string,
   payload: IUser
}

interface ActionUserOfPostFailed {
   type: string,
   payload: string
}

interface ActionUserOfPostLoading {
   type: string,
   payload: boolean
}

export type ActionsUserTypes = ActionGetUserOfPost | ActionUserOfPostFailed | ActionUserOfPostLoading;

export function fetchUser(idUser: number){
    return {
        type: REQUEST_COMMENTS,
        payload: {
            idUser
        }
    }
}