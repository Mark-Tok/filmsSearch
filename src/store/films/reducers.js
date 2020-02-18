import data from './../../assets/films'
import { FIND_INPUT, SET_STATUS_TRUE, SET_STATUS_FALSE, BACK } from './actions'


const getData = () => {
    if (localStorage.getItem('films') !== null) {
        const saveFilms = JSON.parse(localStorage.getItem('films'));
        let state;
        saveFilms.map((item) => {
            const idSave = item.id
            return data.map((item, index, array) => {
                if (item.id === idSave) {
                    item.save = true
                    state = array
                }
            })
        })
        return state
    }
    else {
        return data
    }
}

export default (state = getData(), action) => {
    switch (action.type) {
        case FIND_INPUT:
            return action.payload;
        case SET_STATUS_TRUE:
            return [...action.payload];
        case SET_STATUS_FALSE:
            return [...action.payload];
        case BACK:
            return [...action.payload];
    }
    return state;
}