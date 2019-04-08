import axios from 'axios';

export const getHeroLists = () =>
    (dispatch) => {
        const url = 'https://ramanamatya.github.io/react-training/json/list.json';
        return axios.get(url)
            .then((response) => {
                dispatch({
                    type: 'FETCH_DATA_SUCCESS',
                    payload: response.data,
                });
            })
            .catch(() => {
                console.log(error);
            });
    };