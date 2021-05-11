import { UserActionTypes } from './user.types';

/*User actions are functions that return object. Each object is in the
correct format that action is expected to be.*/

export const setCurrentUser = user => ({
    type: UserActionTypes.SET_CURRENT_USER,
    payload: user,
});

/*This is the same exact string our Reducer is expecting.We need to allign
the action creator type with the Reducer type expectation in order to
create the appropriate effects in our Reducer.*/

/*Payload type identifies what type of action we want to do and action.
payload identifies for us which person we want to perform the action on*/

/*This shape of an object is all an action is. It has two values-A Type (string)
& Payload*/

/* We have the action that our components are going to leverage in order to
update our Reducers with appropriate values*/
