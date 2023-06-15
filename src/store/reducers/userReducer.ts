import {IUser} from "../../models/IUser";
import {IActionUserOfPostFailed, IActionUserOfPostSuccess, IStartActionUserOfPost} from "../actions/userActions";
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

type TypesActionsUser = IStartActionUserOfPost | IActionUserOfPostFailed | IActionUserOfPostSuccess;

export const userReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case START_USER_OF_POST:
            return {
               ...state, 
               isLoading: true
            };
         case REQUEST_COMMENTS_SUCCESS:
             console.log('reducerfrrrr')
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