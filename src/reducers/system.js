import { RECIEVED_OBJECTS } from '../actions/system';
import { OBJECT_PAGE, HOME_PAGE } from '../store/routesMap';

const initialState = {
  objects: [],
  activeObject: null,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case RECIEVED_OBJECTS:
      return {
        ...state,
        objects: action.payload.data,
        activeObject: action.payload.activeObject,
      };
    case OBJECT_PAGE: {
      const activeObject = state.objects
        ? state.objects.find(
            object =>
              object.id === `${action.payload.type}/${action.payload.id}`,
          )
        : null;
      return {
        ...state,
        activeObject: activeObject ? activeObject : null,
      };
    }
    case HOME_PAGE:
      return {
        ...state,
        activeObject: null,
      };
    default:
      return state;
  }
}
