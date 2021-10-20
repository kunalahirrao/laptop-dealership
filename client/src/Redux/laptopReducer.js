import {
    GET_LAPTOPS
} from './ActionTypes'


const initialState = {
    laptops:[]
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_LAPTOPS:
            return {
                ...state,
                laptops:action.payload
            }       
        default: return state
    }
}

export default reducer