import axios from 'axios';

export const actions = {
    SIGN_IN: "SIGN_IN",
    SIGN_OUT: "SIGN_OUT",
    CREATE_USER: "CREATE_USER",
    GET_MOVIE: "GET_MOVIE",
    GET_FAVORITE: "GET_FAVORITE",
    CREATE_FAVORITE: "CREATE_FAVORITE",
    DELETE_FAVORITE: "DELETE_FAVORITE"
};

const URL_BASE = "http://localhost:3001";

export const RESET = "RESET";

// acciones para logear, desloguear, crear y buscar usaurio

export const sign_in = (user) => {
    return async (dispatch) => {
        try {
            const response = await axios.post(`${URL_BASE}/users/getUser`, user).then((res) => res.data);
            return dispatch({
                type: "SIGN_IN",
                payload: response
            });
        } catch (error) {
            return error?.response?.data;
        };
    };
};

export const sign_out = () => {
    return (dispatch) => {
        return dispatch({
            type: "SIGN_OUT",
            payload: null
        });
    };
};

export const create_user = (user) => {
    return async (dispatch) => {
        try {
            const response = await axios.post(`${URL_BASE}users/createUser`, user).then((res) => res.data);
            return dispatch({
                type: "CREATE_USER",
                payload: response
            });
        } catch (error) {
            return error?.response?.data;
        }
    }
};

// acciones para las pelis

export const get_movie = (input) => {
    return async (dispatch) => {
        try {
            const response = await axios.get(`${URL_BASE}/movies?search=${input}`).then((res) => res.data.Search);
            return dispatch({
                type: "GET_MOVIE",
                payload: response
            });
        } catch (error) {
            return error?.response?.data;
        };
    };
};

// acciones para los favorites

export const get_favorite = (UserId) => {
    return async (dispatch) => {
        try {
            const response = await axios.get(`${URL_BASE}/favorites/getFavorites`, UserId).then((res) => res.data);
            return dispatch({
                type: "GET_FAVORITE",
                payload: response
            })
        } catch (error) {
            return error?.response?.data;
        }
    };
};

export const create_favorite = (info) => {
    return async (dispatch) => {
        try {
            const response = await axios.post(`${URL_BASE}/favorites/createFavorites`, info).then((res) => res.data);
            return dispatch({
                type: "CREATE_FAVORITE",
                payload: response
            });
        } catch (error) {
            return error?.response?.data;
        };
    };
};

export const delete_favorite = (info) => {
    return async (dispatch) => {
        try {
            const response = await axios.delete(`${URL_BASE}/favorites/deleteFavorites`, info).then((res) => res.data);
            return dispatch({
                type: "DELETE_FAVORITE",
                payload: response
            });
        } catch (error) {
            return error?.response?.data;
        };
    };
};