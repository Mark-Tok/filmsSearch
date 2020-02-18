import React, {useRef, useEffect} from "react";
import data from '../assets/films';
import {findInputFilms} from './../store/films/actions';
import {useDispatch} from 'react-redux'

function InputSearch(props) {
    const dispatch = useDispatch();
    const input = useRef(null);

    useEffect(() => {
      if (!props.value) {
        input.current.value = ''
      }
    })

    const getfilteredFilms = (e) => {
        props.back(true)
        props.loader()
        const filteredItem = data.filter((item) => {
          return item.title.toLowerCase().search(e.target.value.replace(/[/\\/^'[']/g, '').trim().toLowerCase()) !== -1;
        });
        setTimeout(() => {
            dispatch(findInputFilms(filteredItem)) 
        }, 1500) 
        if (e.target.value === '') {
          props.back(false)
        }
      }

      return (
        <div className="search-block">
          <input ref={input} placeholder="Поиск" onChange={getfilteredFilms} type="input" />
        </div>
      )
}

export default InputSearch;