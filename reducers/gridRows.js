import _ from "lodash";

const testCaseList = _.range(30).map(index => ({
  key: `JQA-T${index}`,
  name: `Test Case ${index}`,
  environment: `Environment ${index}`
}));

const moveUp = (item, list) => move(item, list, index => index - 1);
const moveDown = (item, list) => move(item, list, index => index + 1);

const move = (item, list, directionFn) => {
  const reorderedList = [...list];
  const index = reorderedList.indexOf(item);
  const itemToMove = reorderedList[index];
  const indexToMove = directionFn(index);

  reorderedList[index] = reorderedList[indexToMove];
  reorderedList[indexToMove] = itemToMove;

  return reorderedList;
};

const byId = {};
testCaseList.forEach(item => (byId[item.key] = item));

const initialState = {
  ids: testCaseList.map(item => item.key),
  byId
};

export const gridRows = (state = initialState, action = {}) => {
  switch (action.type) {
    case "UPDATE_ITEM":
      return {
        ...state,
        byId: {
          ...state.byId,
          [action.id]: action.payload
        }
      };
    case "ADD_ITEM":
      return {
        ids: [action.newItem.key, ...state.ids],
        byId: {
          ...state.byId,
          [action.newItem.key]: action.newItem
        }
      };
    case "DELETE_ITEM":
      const byId = state.byId;
      delete byId[action.id];

      return {
        ids: state.ids.filter(id => id !== action.id),
        byId
      };
    case "MOVE_UP":
      return { ...state, ids: moveUp(action.id, state.ids) };
    case "MOVE_DOWN":
      return { ...state, ids: moveDown(action.id, state.ids) };
  }
  return state;
};
