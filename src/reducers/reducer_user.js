import { CREATE_USER } from '../actions/index';

const INITIAL_STATE = { user: null };

export default function(state = INITIAL_STATE, action) {

  switch(action.type) {
  case CREATE_USER:
    console.log('Response:' + action.payload);
  default:
    return state;
  }
}
