import _ from 'lodash';
import { move } from '../helpers';

const testCaseList = _.range(30).map(index => ({
  key: `JQA-T${index}`,
  name: `Test Case ${index}`,
  urlKey: `url-${index}`,
  environmentId: 'chrome',
  environmentList: [
    { label: 'Firefox', value: 'firefox' },
    { label: 'Google Chrome', value: 'chrome' }
  ]
}));

const moveUp = (item, list) => move(item, list, index => index - 1);
const moveDown = (item, list) => move(item, list, index => index + 1);

const byId = {};
testCaseList.forEach(item => (byId[item.key] = item));

const initialState = {
  ids: testCaseList.map(item => item.key),
  byId
};

export const gridRows = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'UPDATE_ITEM':
      const { id, ...rest } = action.payload;
      return {
        ...state,
        byId: {
          ...state.byId,
          [id]: { ...state.byId[id], ...rest }
        }
      };
    case 'BULK_UPDATE':
      return {
        ...state,
        byId: state.ids.reduce((previous, current) => {
          previous[current] = {
            ...state.byId[current],
            ...action.payload
          };
          return previous;
        }, {})
      };
    case 'ADD_ITEM':
      return {
        ids: [action.newItem.key, ...state.ids],
        byId: {
          ...state.byId,
          [action.newItem.key]: action.newItem
        }
      };
    case 'DELETE_ITEM':
      const byId = state.byId;
      delete byId[action.id];

      return {
        ids: state.ids.filter(id => id !== action.id),
        byId
      };
    case 'MOVE_UP':
      return { ...state, ids: moveUp(action.id, state.ids) };
    case 'MOVE_DOWN':
      return { ...state, ids: moveDown(action.id, state.ids) };
  }
  return state;
};
