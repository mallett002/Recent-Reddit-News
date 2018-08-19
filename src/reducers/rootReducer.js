import {
    FETCH_NEWS_BEGIN,
    FETCH_NEWS_SUCCESS,
    FETCH_NEWS_FAILURE
} from '../actions/actions';

const initialState = {
    isLoading: false,
    errorMessage: null,
    data: {}
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_NEWS_BEGIN: 
            return {
                ...state,
                isLoading: true
            }
        case FETCH_NEWS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                data: action.payload
            }
        case FETCH_NEWS_FAILURE:
            return {
                ...state,
                isLoading: false,
                errorMessage: action.payload
            }
        default:
            return state
    }
};

export default rootReducer;