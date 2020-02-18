import React, { useState } from "react";
import { connect } from 'react-redux';
import ItemFilm from './ItemFilm';
import { useSelector } from 'react-redux';

function ListFilms(props) {
    const [count, loadFilms] = useState(10);
    const films = useSelector(state => state.films);
    const tags = useSelector(state => state.tags);

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
    if (localStorage.getItem('films') !== null) {
        if (tags.length === 0) {
            let saveFilms = films.filter((item) => {
                return item.save === true
            })
            return (
                Item(saveFilms)
            )
        }
        else {
            let arrayForSearchTags = []
            films.map((item, index, array) => {
                const film = item;
                const checker = (film, tags) => tags.every(v => film.includes(v));
                if (checker(item.tags, tags)) {
                    arrayForSearchTags.push(film)
                }
            })
            let saveFilms = arrayForSearchTags.filter((item) => {
                return item.save === true
            })
            console.log(saveFilms)
            return (
                Item(saveFilms)
            )
        }
    }
    
    else {
        return <div>Нет сохранённых фильмов</div>
    }
}

const mapsStateToProps = (state) => {
    return {
        films: state.films
    }
}

export default connect(mapsStateToProps, null)(ListFilms);