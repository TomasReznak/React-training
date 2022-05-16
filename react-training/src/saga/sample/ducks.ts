import {call, put, select, takeEvery} from "redux-saga/effects";
import {createActionType, createApiActionCreators, createReducer, RequestActionTypes} from "../../redux/redux-helpers";
import {AppState} from "../../redux/store/models/AppState";
import {ExtendedAxiosResponse} from "../../api-client";
import api from "./api";
import {Post} from "../../view/page/ApiCallWithReduxComponent";

/* STATE */
export interface DataState {
  posts: Array<Post>;
}

/* ACTION TYPES */
export enum ActionTypes {
  GetData = '@@GET_DATA',
}

/* ACTIONS */
export const getDataActions = createApiActionCreators(ActionTypes.GetData);

/* REDUCERS */
const initialState: DataState = {
  posts: [],
};

export default createReducer(initialState, {
  [ActionTypes.GetData]: {
    [RequestActionTypes.SUCCESS]: (_state: any, payload: any) => payload,
    [RequestActionTypes.FAILURE]: (_state: any) => null,
  },
});

/* SELECTORS */
export const selectData = (state: AppState) => {
  console.log(state);
  return state.posts;
};

/* SAGAS */
export function* getData({ payload: name }: any) {
  const resp: ExtendedAxiosResponse = yield call(api.getData, name);

  if (resp.ok) {
    yield put(
      getDataActions.success(resp.data)
    );
  } else {
    console.log('error handler');
  }
}

/* EXPORT */
export function* dataSaga() {
  yield takeEvery(createActionType(ActionTypes.GetData, RequestActionTypes.REQUEST), getData);
}
