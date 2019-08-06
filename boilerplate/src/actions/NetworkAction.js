import { INTERNET_AVAILABLE, INTERNET_NOTAVAILABLE } from "../actions/actionConstants/ActionConstants";

export function internetAvailable() {
    return dispatch => {
        dispatch({ type: INTERNET_AVAILABLE });
    };
}

export function internetNotAvailable() {
    return dispatch => {
        dispatch({ type: INTERNET_NOTAVAILABLE });
    };
}
