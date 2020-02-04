import axios from 'axios';

export const GET_DATA = 'GET_DATA';

export const getData = (data) => {
    return{
        type:GET_DATA,
        payload:data
    }
}

export const fetchData = () => dispatch => {
    return axios.get('https://5e3134bf576f9d0014d644c4.mockapi.io/user').then(res => {
        dispatch(getData(res.data))
    })
}