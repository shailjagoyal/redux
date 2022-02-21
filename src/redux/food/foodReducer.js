import { FETCH_REQUEST , FETCH_SUCCESS , FETCH_FAILURE } from "./foodTypes"

const initialState = {
    loading: false,
    food: [],
    error: ''
}

const foodReducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_REQUEST : 
            return {
                ...state,
                loading: true
            }
        case FETCH_SUCCESS : 
            return {
                ...state,
                loading: false,
                food: action.payload,
                error: ''
            }
        case FETCH_FAILURE : 
            return {
                ...state,
                loading : false,
                food: [],
                error : action.payload
            }
        default:
            return state
    }

}

export default foodReducer