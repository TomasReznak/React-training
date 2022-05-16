import { flattenDeep, reduce } from 'lodash';

export enum RequestActionTypes {
  REQUEST = 'REQUEST',
  SUCCESS = 'SUCCESS',
  FAILURE = 'FAILURE',
}

export const createActionType = (...parts: any) => flattenDeep(parts).join('_');

//Create string for calling actions
export const createActionCreator = (...type: string[]) => {
  return (payload?: any) => ({
    type: createActionType(type),
    payload,
  });
};

export const createApiActionCreators = (type: string) => {
  return {
    request: createActionCreator(type, RequestActionTypes.REQUEST),
    success: createActionCreator(type, RequestActionTypes.SUCCESS),
    failure: createActionCreator(type, RequestActionTypes.FAILURE),
  };
};

export const createReducer = (initialState: any, reducerMap: any) => {
  const iterator: any = (reducers: any, initial: any = {}, prefix: any = []) =>
    reduce(
      reducers,
      (acc: any, reducer: any, type: string) => {
        if (typeof reducer === 'function') {
          return {
            ...acc,
            [createActionType(prefix, type)]: reducer,
          };
        }
        return iterator(reducer, acc, [createActionType(prefix, type)] as never[]);
      },
      initial
    );

  const flattened = iterator(reducerMap);

  return (state = initialState, action: any) => {
    const reducer = flattened[action.type];
    return reducer ? reducer(state, action.payload) : state;
  };
};
