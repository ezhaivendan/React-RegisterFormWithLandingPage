const getLocalStoreData = JSON.parse(localStorage.getItem('accountUser')) || [];
const getLoginUserInfo = JSON.parse(localStorage.getItem('loginUserInfo')) || [];
const initialState =  { accountUser: getLocalStoreData, loginUser: getLoginUserInfo };

const SignUpReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'ADD_USER':
            localStorage.setItem('accountUser', JSON.stringify([...state.accountUser, action]));
            return {
                ...state, 
                accountUser: [
                    ...state.accountUser,
                    action
                ]
            };
            
        case 'LOGIN_USER':
            localStorage.setItem('loginUserInfo', JSON.stringify([...state.loginUser, action]));
            return {
                ...state, 
                loginUser: [
                    ...state.loginUser,
                    action
                ]
            };

        case 'LOGOUT_USER':
            localStorage.removeItem('loginUserInfo');
            const loggoutUser = state.loginUser.filter((user) => user.email !== action.email);
            return {
                ...state, 
                loginUser: loggoutUser
            };
        
        default:
            return state;
    }
}

export default SignUpReducer;
