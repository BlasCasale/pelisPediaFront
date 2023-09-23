import { actions } from './actions';

const initialState = {
    movies: [],
    moviesCopy: [],
    favoriteArray: [],
    favorite: {},
    userCreated: {},
    user: null
};

export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        // user action
        case actions.SIGN_IN:
            return {
                ...state,
                user: action.payload
            };

        case actions.SIGN_OUT:
            return {
                ...state,
                user: action.payload
            };

        case actions.CREATE_USER:
            return {
                ...state,
                userCreated: action.payload
            };

        // movie action
        case actions.GET_MOVIE:
            return {
                ...state,
                movies: action.payload
            };

        // favorites action
        case actions.GET_FAVORITE:
            return {
                ...state,
                favoriteArray: action.payload
            };

        case actions.CREATE_FAVORITE:
            return {
                ...state,
                favorite: action.payload
            };

        case actions.DELETE_FAVORITE:
            return {
                ...state,
                favorite: action.payload
            };

        default:
            return state;
    };
};