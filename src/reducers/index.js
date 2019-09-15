import { actions } from '../actions/index';

const reducer = (state, action) => {
    switch (action.type) {
    case actions.setFavorite:
        return {
            ...state,
            myList: [
                ...state.myList,
                object,
            ],
        };

    case actions.deleteFavorite:
        return {
            ...state,
            myList: state.myList.filter(
                (items) => items.id !== action.payload,
            ),
        };

    case actions.loginRequest:
        return {
            ...state,
            user: action.payload,
        };

    case actions.logoutRequest:
        return {
            ...state,
            user: action.payload,
        };

    default:
        return state;
    }
};

export default reducer;
