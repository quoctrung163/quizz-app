import { combineReducers } from 'redux';
import fetchAPIReducer from './fetchAPI';

const rootReducer = combineReducers({
  fetchAPI: fetchAPIReducer
});

export type RootState = ReturnType<typeof rootReducer>

export default (state: any, action: any) => rootReducer(state, action);