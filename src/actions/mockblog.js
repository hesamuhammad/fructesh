import axios from 'axios';

export const SET_DATA_MOCKBLOG = "SET_DATA_MOCKBLOG"

const MOCKBLOG_API = process.env.REACT_APP_MOCKBLOG

export const setDataMockBlog = data => {
    return {
        type: SET_DATA_MOCKAPI,
        payload: data
    }
}

export const fetchDataMock = () => dispatch => {
    return axios.get(MOCKBLOG_API).then(result => {
        dispatch(setDataMockBlog(result.data));
    });
}

export const addDataMock = ({name, image, phrase, date}) => dispatch => {
    return axios.post(MOCKBLOG_API, {name, image, phrase, date}).then(result => {
        dispatch(fetchDataMock());
    })
}

export const deleteData = index => dispatch => {
    return axios.delete(`${MOCK_API}/${index}`).then(result => {
        dispatch(fetchDataMock());
    })
}