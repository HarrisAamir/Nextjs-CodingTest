import { call, put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function getPostsApi() {
    return axios.get('https://jsonplaceholder.typicode.com/posts');
}

function* fetchPostsSaga() {
    try {
        const response = yield call(getPostsApi);
        yield put({ type: 'FETCH_POSTS_SUCCESS', payload: response.data });

    } catch (e) {
        yield put({ type: 'FETCH_POSTS_FAILURE', payload: e.message });
    }
}
function* watchFetchPosts() {
    yield takeLatest('FETCH_POSTS_REQUEST', fetchPostsSaga);
}

export default watchFetchPosts;
