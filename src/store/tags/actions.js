export const ADD_TAG = 'ADD_TAG';
export const DELETE_TAG = 'DELETE_TAG';
export const DELETE_ALL_TAG = 'DELETE_ALL_TAG';


export const deleteTag = (index, array) => {
    array.splice(index, 1)
    return {
        type: DELETE_TAG,
        payload: array
    }
}

export const deleteAllTags = () => {
    return {
        type: DELETE_ALL_TAG,
        payload: []
    }
}

export const addTag = (tag, array) => {
    array.push(tag)
    let newArrayTags = [...new Set(array)];
    return {
        type: ADD_TAG,
        payload: newArrayTags
    }
}