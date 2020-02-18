import React, { useState } from "react";
import ItemFilm from './ItemFilm';
import { useSelector } from 'react-redux';

function ListFilms(props) {
    const [count, loadFilms] = useState(10);
    const tags = useSelector(state => state.tags);
    const films = useSelector(state => state.films);

    
    const Item = (data) => {
        return (
            <React.Fragment>
                {data.slice(0, count).map((item, index) => {
                    return <ItemFilm key={index} data={item} />
                })}
                {
                    data.length > 10 ? <button className="films-list__button-load" onClick={() => { loadFilms(count + 10); }}> загрузить ещё </button> : null
                }
            </React.Fragment>
        )
    }
    if(films.length !== 0) {
        if (tags.length === 0) {
            return (
                Item(films)
            )
        }
        else {
            let arrayForSearchTags = []
            films.map((item) => {
                const film = item;
                const checker = (film, tags) => tags.every(v => film.includes(v));
                if (checker(item.tags, tags)) {
                    arrayForSearchTags.push(film)
                }
            })        
            return (
                Item(arrayForSearchTags)
            )
        }
    }
    else {
        return <div>фильмов не найдено</div>
    }

}

export default ListFilms;