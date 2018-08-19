export const FETCH_NEWS_BEGIN = 'FETCH_NEWS_BEGIN';
export const FETCH_NEWS_SUCCESS = 'FETCH_NEWS_SUCCESS';
export const FETCH_NEWS_FAILURE = 'FETCH_NEWS_FAILURE';

// Begin
export const beginFetch = () => ({
    type: FETCH_NEWS_BEGIN
});

// Success
export const fetchSuccess = (json) => ({
    type: FETCH_NEWS_SUCCESS,
    payload: { json }
});

// Failure
export const fetchFailure = (error) ({
    type: FETCH_NEWS_FAILURE,
    payload: { error }
});

const url = 'http://reddit.com/search?q=';

// Fetch the data. Called with filterBy.
// filterBy will filter the news categories.
export const fetchNews = (filterBy) => dispatch => {
    dispatch(beginFetch());
    fetch(`${url}${filterBy}`)
        .then(handleErrors)
        .then(res => res.json())
        .then(json => {
            dispatch(fetchSuccess(json));
        })
        .catch((error) => dispatch(fetchFailure(error)))
};

// Handle Errors
function handleErrors(response) {
    if (!response.ok) {
        throw Error(response.statusText);
    }
    return response;
}