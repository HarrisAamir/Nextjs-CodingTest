import { all, fork } from 'redux-saga/effects';

import watchFetchPosts from './postsSaga';



export default function* rootSaga() {

  yield all([

    fork(watchFetchPosts),

  ]);

}