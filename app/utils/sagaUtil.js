import { call, put } from 'redux-saga/effects';

export function* genericSagaHandler(action) {
  const {
    routines: [SUCCESS, FAILURE],
    apiCall,
    afterActions,
  } = action;
  try {
    const { data } = yield call(apiCall);
    yield put({ type: SUCCESS, payload: data });

    if (afterActions) {
      for (let i = 0; i < afterActions.length; i++) {
        yield put(afterActions[i]);
      }
    }
  } catch (e) {
    yield put({ type: FAILURE, payload: 'an error occurred during the call' });
  }
}
