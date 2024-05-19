import axios from "axios"
import { put, takeEvery } from "redux-saga/effects"
function* fetchData() {
    let resp = yield axios.get('https://jsonplaceholder.typicode.com/posts')
    yield put({ type: 'POST', payload: resp.data })
}
export function* rootSaga() {
    yield takeEvery('FETCH_DATA', fetchData)
}