// https://medium.com/@martin_hotell/improved-redux-type-safety-with-typescript-2-8-2c11a8062575
import { ActionCreatorsMapObject } from 'redux';
import { AppEvents } from "../events";
import { IUserState } from '../store';

/* Action type and payload settings */
interface Action<T extends string> {
  type: T;
}

interface ActionWithPayload<T extends string, P> extends Action<T> {
  payload: P;
}

function createAction<T extends string, P>(
  type: T,
  payload: P,
): ActionWithPayload<T, P>;

function createAction<T extends string, P>(type: T, payload?: P) {
  return payload === undefined ? { type } : { type, payload };
};

/* App Actions */
const SetName = (name: IUserState['name']) => createAction(AppEvents.SET_NAME, name);
const SetAge = (age: IUserState['age']) => createAction(AppEvents.SET_AGE, age);
export const Actions = { SetName, SetAge };

type ActionsUnion<A extends ActionCreatorsMapObject> = ReturnType<
  A[keyof A]
>
export type IActions = ActionsUnion<typeof Actions>;
