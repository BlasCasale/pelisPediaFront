import axios from 'axios';
const PASS = import.meta.env.VITE_PASS
const MAIL = import.meta.env.VITE_MAIL

export const actions = {
    SIGN_IN: "SIGN_IN",
    SIGN_GUEST: "SIGN_GUEST",
    ERROR_SIGN_IN: "ERROR_SIGN_IN",
    ERROR_CREATE_USER: "ERROR_CREATE_USER",
    SIGN_OUT: "SIGN_OUT",
    CREATE_USER: "CREATE_USER",
    GET_MOVIE: "GET_MOVIE",
    GET_FAVORITE: "GET_FAVORITE",
    CREATE_FAVORITE: "CREATE_FAVORITE",
    DELETE_FAVORITE: "DELETE_FAVORITE"
};

const URL_BASE = "https://pelispedia.onrender.com";

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
            const message = "El mail y contraseña no coinciden"
            return dispatch({
                type: "ERROR_SIGN_IN",
                payload: message
            });
        };
    };
};

export const sign_guest = () => {
    const guest = {
        mail: MAIL,
        password: PASS
    }

    return async (dispatch) => {
        try {
            const response = await axios.post(`${URL_BASE}/users/getUser`, guest).then((res) => res.data);
            return dispatch({
                type: "SIGN_GUEST",
                payload: response
            });
        } catch (error) {
            const message = "El mail y contraseña no coinciden"
            return dispatch({
                type: "ERROR_SIGN_IN",
                payload: message
            });
        };
    };
}

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
            const response = await axios.post(`${URL_BASE}/users/createUser`, user).then((res) => res.data);
            return dispatch({
                type: "CREATE_USER",
                payload: response
            });
        } catch (error) {
            const message = error.response.data;
            const depuredError = message.split(":")[1].split(".")[0];
            return dispatch({
                type: "ERROR_CREATE_USER",
                payload: depuredError
            });
        };
    };
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
            const response = await axios.get(`${URL_BASE}/favorites/getFavorites/${UserId}`).then((res) => res.data);
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
            const { UserId, imdbID } = info;
            const response = await axios.delete(`${URL_BASE}/favorites/deleteFavorites`, { data: { UserId, imdbID } }).then((res) => res.data);
            return dispatch({
                type: "DELETE_FAVORITE",
                payload: response
            });
        } catch (error) {
            return error?.response?.data;
        };
    };
};
