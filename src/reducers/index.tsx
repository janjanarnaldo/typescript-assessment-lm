import { combineReducers } from 'redux';
import { AppEvents } from "../events";
import { IActions } from "../actions";
import { IUserState } from '../store';

const AppInitialState: IUserState = {
  name: '',
  age: 0,
};

const AppReducer = (
  state = AppInitialState,
  action: IActions,
): IUserState => {
  switch (action.type) {
    case AppEvents.SET_NAME: {
      return { ...state, name: action.payload };
    }
    case AppEvents.SET_AGE: {
      return { ...state, age: action.payload};
    }
    default: return state;
  }
}

const reducers = combineReducers({
  app: AppReducer,
});

export { reducers }
