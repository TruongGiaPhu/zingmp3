import acitonTypes from '../actions/actionTypes';

const initState = {
    HomeData: [],
    text: '123',
};

const appReducer = (state = initState, aciton) => {
    switch (aciton.type) {
        case acitonTypes.GET_HOME:
            return state;

        default:
            return state;
    }
};

export default appReducer;
