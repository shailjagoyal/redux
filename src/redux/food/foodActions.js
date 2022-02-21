import { FETCH_REQUEST , FETCH_SUCCESS , FETCH_FAILURE } from "./foodTypes"
import axios from "axios"


export const fetchRequest = () => {
    return {
        type: FETCH_REQUEST
    }
}

export const fetchSuccess = food => {
    return {
        type: FETCH_SUCCESS,
        payload: food
    }
}

export const fetchError = (error) => {
    return {
        type: FETCH_FAILURE,
        payload: error
    }
}

export const fetchData = () => {
    return (dispatch) => {
        dispatch(fetchRequest)
        axios.get('https://api.edamam.com/api/food-database/v2/parser?app_id=61a2f123&app_key=d57afedf3d6eec03384362ff4d7161d4%09&ingr=rice&nutrition-type=cooking')
            .then(response => {
                console.log(response.data.hints)
                const food = response.data.hints
                dispatch(fetchSuccess(food))
            })
            .catch(error => {
                const errorMsg = error.message
                dispatch(fetchError(errorMsg))
            })
    }
}