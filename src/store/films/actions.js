export const FIND_INPUT = 'FIND_INPUT';
export const SET_STATUS_TRUE = 'SET_STATUS_TRUE';
export const SET_STATUS_FALSE = 'SET_STATUS_FALSE';
export const BACK = 'BACK';

export const findInputFilms = (films) => {
    return {
        type: FIND_INPUT,
        payload: films
    }
}

export const setStatusFalse = (item, array) => {
    let id = item.id
    array.map((item) => {
        if (id === item.id) {
            item.save = false;
            const saveFilms = JSON.parse(localStorage.getItem('films'));
            const newArray = saveFilms.filter(function( obj ) {
                return obj.id !== id;
              });
              if (newArray.length === 0) {
                localStorage.removeItem('films')
              }
              else {
                localStorage.setItem('films', JSON.stringify(newArray));
              }
        }
    })
    return {
        type: SET_STATUS_FALSE,
        payload: array
    }
}

export const setStatusTrue = (item, array) => {
    let id = item.id
    array.map((item) => {
        if (id === item.id) {
            item.save = true;
            if (localStorage.getItem('films') !== null) {
                const saveFilms = JSON.parse(localStorage.getItem('films'));
                saveFilms.push(item);
                localStorage.setItem('films', JSON.stringify(saveFilms));
            }
            else {
                localStorage.setItem('films', JSON.stringify([item]));
            }
        }
    })
    return {
        type: SET_STATUS_TRUE,
        payload: array
    }
}

export const backToStart = (data) => {
    return {
        type:BACK,
        payload:data
    }
}