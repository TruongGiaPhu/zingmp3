import acitonTypes from '../actions/actionTypes';

const initState = {
    banner: [],
};

const appReducer = (state = initState, aciton) => {
    switch (aciton.type) {
        case acitonTypes.GET_HOME:
            return {
                ...state,
                banner:
                    aciton.homeData?.find(item => item.sectionType === 'banner')
                        ?.items || null,
            };

        default:
            return state;
    }
};

export default appReducer;
