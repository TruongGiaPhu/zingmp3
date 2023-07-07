import acitonTypes from './actionTypes';
import * as apis from '../../apis';

export const getHome = () => async dispatch => {
    try {
        const res = await apis.getHome();
        if (res?.data.err === 0) {
            dispatch({
                type: acitonTypes.GET_HOME,
                homeData: res.data.data.items,
            });
        } else {
            dispatch({
                type: acitonTypes.GET_HOME,
                homeData: null,
            });
        }
    } catch (error) {
        dispatch({
            type: acitonTypes.GET_HOME,
            homeData: null,
        });
    }
};
