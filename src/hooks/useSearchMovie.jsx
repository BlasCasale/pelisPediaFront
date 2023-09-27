import { useDispatch } from "react-redux";
import { get_movie } from "../redux/actions";
import { useEffect } from "react";

export const useSearchMovie = (input) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(get_movie(input));
    }, [input]);
};