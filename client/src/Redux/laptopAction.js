import axios from 'axios'
import {
    GET_LAPTOPS
} from './ActionTypes'


export const fetchLaptops = async (dispatch, getState) => {
    const { data } = await axios.get("http://localhost:3001/laptop-management/laptops")
    dispatch({ type: GET_LAPTOPS, payload: data.result })
}