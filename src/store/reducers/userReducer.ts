import { IUser } from "../../models/IUser";
import { ActionsUserTypes } from "../actions/userActions";
import {GET_USER_OF_POST, REQUEST_COMMENTS_FAILED, REQUEST_COMMENTS_SUCCESS} from "../types";

interface IUserReducerState {
    user: IUser | null,
    isLoading: boolean;
    error: string
}

const initialState: IUserReducerState  = {
    user: null,
    isLoading: false,
    error: ''
}

export const userReducer = (state = initialState, action: ActionsUserTypes) => {
    switch (action.type) {
        case GET_USER_OF_POST:
            return {
               ...state, 
               isLoading: true
            };
         case REQUEST_COMMENTS_SUCCESS:
               return {
                  ...state, 
                  isLoading: false,
                  user: action.payload
               }
         case REQUEST_COMMENTS_FAILED:
            return {
               ...state, 
               isLoading: false,
               error: action.payload
            }
        default:
            return state;
    }
}