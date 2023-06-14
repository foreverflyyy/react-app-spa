import {HIDE_LOADER, SHOW_LOADER} from "../types";

const initialState  = {
    loading: false
}

interface ActionApp {
    type: string,
    payload: boolean
}

export const appReducer = (state = initialState, action: ActionApp) => {
    switch (action.type) {
        case SHOW_LOADER:
            return {...state, loading: true };
        case HIDE_LOADER:
            return {...state, loading: false };
        default:
            return state;
    }
}