import { LOGIN, LOGOUT } from "../action/AuthAction";

const initialState = {
    isLoginUser: false,
    user: {}
}

export default function authReducer(state = initialState, actions) {
    switch (actions.type) {
        case LOGIN: {
            return {
                ...state,
                isLoginUser: true,
                user: actions.payload
            }
        }


        case LOGOUT: {
            return {
                ...state,
                isLoginUser: false,
                user: {}
            }
        }

        default:
            return state
    }
}