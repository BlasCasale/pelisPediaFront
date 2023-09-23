import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { sign_in } from '../../redux/actions';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const FormLogin = () => {
    const user = useSelector((state) => state.user);

    const dispatch = useDispatch();
    
    const [input, setInput] = useState({ mail: "", password: "" });
    
    const navigate = useNavigate();

    useEffect(() => {
        user && navigate('/main')
    }, [user])

    const handleInput = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const user = {
            mail: input.mail,
            password: input.password
        };
        setInput({ mail: "", password: "" });
        dispatch(sign_in(user));
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="mail" onChange={handleInput} value={input.mail} />
            <input type="text" name="password" onChange={handleInput} value={input.password} />
            <button type="submit">Enviar</button>
        </form>
    );
};

export default FormLogin;