export const FETCH_NEWS_BEGIN = 'FETCH_NEWS_BEGIN';
export const FETCH_NEWS_SUCCESS = 'FETCH_NEWS_SUCCESS';
export const FETCH_NEWS_FAILURE = 'FETCH_NEWS_FAILURE';

// Begin
const beginFetch = () => ({
    type: FETCH_NEWS_BEGIN
});

// Success
const fetchSuccess = (json) => ({
    type: FETCH_NEWS_SUCCESS,
    payload: { json }
});

// Failure
const fetchFailure = (error) => ({
    type: FETCH_NEWS_FAILURE,
    payload: { error }
});

// Fetch the data. Called with filterBy.
// filterBy will filter the news categories.
export const fetchNews = (endpoint) => dispatch => {
    dispatch(beginFetch());
    fetch(`https://www.reddit.com/r/${endpoint}`)
        .then(handleErrors)
        .then(res => res.json())
        .then(json => {
            dispatch(fetchSuccess(json.data.children.map(item => item.data)));
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
