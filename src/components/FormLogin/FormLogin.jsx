import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { sign_in } from '../../redux/actions';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { negative } from '../../utils/const';
import { validate, styleInput } from '../../utils/validateInput';

const FormLogin = () => {
    const user = useSelector((state) => state.user);

    const error = useSelector((state) => state.errorSignIn);

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const [input, setInput] = useState({ mail: "", password: "" });

    const [errorInput, setErrorInput] = useState({ mail: "", password: "" });

    const [style, setStyle] = useState({ mail: "", password: "" });

    useEffect(() => {
        user && navigate('/main/index');
    }, [user]);

    const handleInput = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        });

        setErrorInput(validate({
            ...input,
            [e.target.name]: e.target.value
        }, errorInput));

        setStyle(styleInput(errorInput, style));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const user = {
            mail: input.mail,
            password: input.password
        };
        setInput({ mail: "", password: "" });
        dispatch(sign_in(user));
    };

    return (
        <form onSubmit={handleSubmit} className='form'>
            <legend className='formLegend'>Iniciar sesión</legend>
            <div className='formDiv'>
                <label htmlFor="mail" className='formLabel'>Mail:</label>
                <input type="text" id='mail' name="mail" className={`formInput ${style.mail}`} onChange={handleInput} value={input.mail} />
                <span className='formSpan'>{errorInput.mail}</span>
            </div>
            <div className='formDiv'>
                <label htmlFor="password" className='formLabel'>Contraseña:</label>
                <input type="text" id='password' name="password" className={`formInput ${style.password}`} onChange={handleInput} value={input.password} />
                <span className='formSpan'>{errorInput.password}</span>
            </div>
            <button type="submit" className='formButton'>Iniciar sesión</button>
            <span className={`${negative} formSpan`}>{error}</span>
        </form>
    );
};

export default FormLogin;