export const RECIEVED_OBJECTS = 'RECIEVED_OBJECTS';

export const recievedObjects = data => ({
  type: RECIEVED_OBJECTS,
  payload: data,
});
