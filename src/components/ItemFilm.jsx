import React from "react";
import { addTag } from './../store/tags/actions';
import { setStatusTrue, setStatusFalse } from './../store/films/actions'
import { useDispatch, useSelector } from 'react-redux';
import Tooltip from 'react-tooltip-lite';
import {
    Link
} from "react-router-dom";

function ItemFilm(props) {
    const dispatch = useDispatch();
    const tags = useSelector(state => state.tags);
    const films = useSelector(state => state.films);

    const saveFilm = (item, films) => {
        dispatch(setStatusTrue(item, films))
    }

    const deleteFilm = (item, films) => {
        dispatch(setStatusFalse(item, films))
    }
    return (
        <div className="films-list__item">
            <div className="film-list__item-title">
                <Link to={'/film/' + props.data.id}> {props.data.title}</Link>
            </div>
            <div className="films-list__tags-wrapper">
                {props.data.tags.map((item, index, array) => {
                    return <span key={index} onClick={() => { dispatch(addTag(item, tags)) }} className="film-list__tags">#{item}</span>
                })}
            </div>
            {
                props.data.save === true ?
                    <button onClick={() => { deleteFilm(props.data, films) }}><Tooltip content="Удалить из закладок"><i data-tip="hello world" className="fa fa-bookmark" aria-hidden="true"></i></Tooltip></button> :
                    <button onClick={() => { saveFilm(props.data, films) }}><Tooltip content="Добавить в закладки"><i className="fa fa-bookmark-o" aria-hidden="true"></i></Tooltip></button>
            }

        </div>
    )
}
export default ItemFilm;