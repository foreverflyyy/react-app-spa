import {IUser} from "../../models/IUser";
import {TypesActionsUser} from "../actions/userActions";
import {REQUEST_COMMENTS_FAILED, REQUEST_COMMENTS_SUCCESS, START_USER_OF_POST} from "../types";

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

export const userReducer = (state = initialState, action: TypesActionsUser) => {
    switch (action.type) {
        case START_USER_OF_POST:
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