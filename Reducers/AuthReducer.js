const initialState = {
    isLoggedIn: false,
    email: '',
    password: '',
}

const AuthReducer = (state = initialState, action) => {
    switch (action.type) {
        case "LOGIN":
            return { ...state, isLoggedIn: true };
        case "LOGOUT":
            return { ...state, isLoggedIn: false };
        case "UPDATE":
            if (action.name === 'email') {
                return { ...state, email: action.value }
            }
            else {
                return{ ...state, password: action.value }
            }
        default:
            return state;
    }
}

export default AuthReducer;