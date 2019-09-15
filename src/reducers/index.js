import { actions } from '../actions/index';

const reducer = (state, action) => {
    switch (action.type) {
    case actions.setFavorite:
        var exists = false;

        state.myList.forEach((element) => {
            if (element.id == action.payload.id) {
                exists = true;
            }
        });

        if (!exists) {
            const object = action.payload;
            object.isList = false;
            
            return {
                ...state,
                myList: [
                    ...state.myList,
                    object,
                ],
            };
        }

        return state;

    case actions.deleteFavorite:
        return {
            ...state,
            myList: state.myList.filter(
                (items) => items.id !== action.payload,
            ),
        };

    default:
        return state;
    }
};

export default reducer;
