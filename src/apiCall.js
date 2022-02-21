import { createStore, applyMiddleware } from "redux"
import  thunk  from "redux-thunk"
import axios from "axios"

const initialState = {
    loading: false,
    data: [],
    error: ''
}

const FETCH_REQUEST = 'FETCH_REQUEST'
const FETCH_SUCCESS = 'FETCH_SUCCESS'
const FETCH_FAILURE = 'FETCH_FAILURE'

const fetchRequest = () => {
    return {
        type: FETCH_REQUEST
    }
}

const fetchSuccess = (data) => {
    return {
        type: FETCH_SUCCESS,
        payload: data
    }
}

const fetchError = (error) => {
    return {
        type: FETCH_FAILURE,
        payload: error
    }
}

const reducer = (state = initialState, action) => {
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
                data: action.payload,
                error: ''
            }
        case FETCH_FAILURE : 
            return {
                ...state,
                loading : false,
                data: [],
                error : action.payload
            }
        default:
            return state
    }

}

const fetchData =() => {
    return function(dispatch) {
        dispatch(fetchRequest())
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                const data = response.data
                console.log(data)
                dispatch(fetchSuccess(data))
            })
            .catch(error => {
                dispatch(fetchError(error.message))
            })
    }
}

const store = createStore(reducer, applyMiddleware(thunk))
store.subscribe(() => {console.log(store.getState())})
store.dispatch(fetchData())