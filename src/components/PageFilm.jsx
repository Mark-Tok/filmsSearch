import React, { useState } from "react";
import {setStatusTrue, setStatusFalse} from './../store/films/actions';
import {useDispatch, useSelector} from 'react-redux';


function PageFilm(props) {
    const dispatch = useDispatch();
    const [idNumber] = useState(Number(props.match.params.id));
    const films = useSelector(state => state.films);

    const saveFilm = (item, films) => {
        dispatch(setStatusTrue(item, films))
    }

    const deleteFilm = (item, films) => {
        dispatch(setStatusFalse(item, films))
    }

    const goBack = () =>{
        props.history.goBack();
    }  

    const film = (film) => {
        const currentFilm = film.map((item, index, array) => {
            if (item.id === idNumber) {
                return <div key={index} className="block-film">
                    <a onClick={() => {goBack()}}><i className="fa fa-arrow-left" aria-hidden="true"></i> НАЗАД</a>
                    <div className="block-film__poster"></div>
                    <div className="block-film__info">
                        <div className="block-film__info-">
                            {item.title}
                        </div >
                        <div className="block-film__button">
                            {
                                item.save === false ?
                                    <button className="block-film__button--add" onClick={() => {saveFilm(item, films)}}>Добавить в закладки</button> :
                                    <button className="block-film__button--delete" onClick={() => {deleteFilm(item, films)}}>Удалить из закладок</button>
                            }
                        </div>
                    </div>
                </div>
            }
        })
        return currentFilm;
    }
    return (
        <div>
            {film(films)}
        </div>
    )
}

export default PageFilm;