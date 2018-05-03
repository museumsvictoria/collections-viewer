export const RECIEVED_OBJECTS = 'RECIEVED_OBJECTS';

export const recievedObjects = (data, activeObject) => ({
  type: RECIEVED_OBJECTS,
  payload: {
    data,
    activeObject,
  },
});
