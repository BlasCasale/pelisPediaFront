import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { get_movie } from '../../redux/actions';

const Main = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies)
  console.log(movies)

  const handleInput = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    });
  }

  useEffect(() => {
    dispatch(get_movie(input))
  }, [input])

  return (
    <>
      <input type="text" value={input} name='input' onChange={(e) => setInput(e.target.value)} />
    </>
  )
}

export default Main