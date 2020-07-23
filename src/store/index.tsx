import { createStore } from 'redux';
import { reducers } from '../reducers';

export interface IUserState {
  name: string;
  age: number;
};

export interface IAppState {
  app: IUserState;
}

const store = createStore(reducers);

export { store };
