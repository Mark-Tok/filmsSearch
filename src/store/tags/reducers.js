import { ADD_TAG, DELETE_TAG, DELETE_ALL_TAG} from './actions'


export default (state = [], action) => {
    switch (action.type) {
        case ADD_TAG:
            return action.payload
        case DELETE_TAG:
            return [...action.payload]
        case DELETE_ALL_TAG:
            return [...action.payload]
    }
    return state;
}