import React from 'react';
import { useState } from 'react';
import { validate, styleInput } from '../../utils/validateInput';
import { useDispatch, useSelector } from 'react-redux';
import { negative } from '../../utils/const';
import { useNavigate } from 'react-router-dom';
import { create_user } from '../../redux/actions';

const FormRegister = () => {

  const error = useSelector((state) => state.errorRegister);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const [input, setInput] = useState({ name: "", last_name: "", mail: "", password: "", confirmPassword: "" });

  const [errorInput, setErrorInput] = useState({ name: "", last_name: "", mail: "", password: "", confirmPassword: "", passNoMatch: "" });

  const [response, setResponse] = useState("");

  const [style, setStyle] = useState({ name: "", last_name: "", mail: "", password: "", confirmPassword: "" });

  const handleInput = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    });

    setErrorInput(validate({
      ...input, [e.target.name]: e.target.value
    }, errorInput));

    setStyle(styleInput(errorInput, style));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (input.password == input.confirmPassword) {
      const user = {
        name: input.name,
        last_name: input.last_name,
        mail: input.mail,
        password: input.password
      };
      dispatch(create_user(user));
      navigate('/');
    };
  };

  return (
    <form className='form' onSubmit={handleSubmit}>
      <legend className='formLegend'>Regristrarse</legend>

      <div className='formDiv'>
        <label htmlFor="name" className='formLabel'>Nombre:</label>
        <input type="text" name='name' id='name' value={input.name} className={`formInput ${style.name}`} onChange={handleInput} />
        <span className='formSpan'>{errorInput.name}</span>
      </div>

      <div className='formDiv'>
        <label htmlFor="last_name" className='formLabel'>Apellido:</label>
        <input type="text" name='last_name' id='last_name' value={input.last_name} className={`formInput ${style.last_name}`} onChange={handleInput} />
        <span className='formSpan'>{errorInput.last_name}</span>
      </div>

      <div className='formDiv'>
        <label htmlFor="mail" className='formLabel'>Mail:</label>
        <input type="text" id='mail' name='mail' value={input.mail} className={`formInput ${style.mail}`} onChange={handleInput} />
        <span className='formSpan'>{errorInput.mail}</span>
      </div>

      <div className='formDiv'>
        <label htmlFor="password" className='formLabel'>Contraseña:</label>
        <input type="text" id='password' name='password' value={input.password} className={`formInput ${style.password}`} onChange={handleInput} />
        <span className='formSpan'>{errorInput.password}</span>
      </div>

      <div className='formDiv'>
        <label htmlFor="confirmPassword" className='formLabel'>Repetir contraseña:</label>
        <input type="text" id='confirmPassword' name='confirmPassword' value={input.confirmPassword} className={`formInput ${style.confirmPassword}`} onChange={handleInput} />
        <span className='formSpan'>{errorInput.confirmPassword}</span>
      </div>

      <button type='submit' className='formButton'>Registrarse</button>

      <span className={negative}>{error}</span>

      <span className={negative}>{errorInput.passNoMatch}</span>
    </form>
  );
};

export default FormRegister;