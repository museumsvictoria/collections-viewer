import { NOTIFICATION_SHOW, NOTIFICATION_HIDE } from '../actions/notifications';

const initialState = {
  text: null,
  type: null,
  active: false,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case NOTIFICATION_SHOW:
      return {
        text: action.payload.text,
        type: action.payload.type,
        active: true,
      };
    case NOTIFICATION_HIDE:
      return {
        ...state,
        active: false,
      };
    default:
      return state;
  }
}
