import _ from "lodash";

const testCaseList = _.range(30).map(index => ({
  key: `JQA-T${index}`,
  name: `Test Case ${index}`,
  environment: `Environment ${index}`
}));

const byId = {};
testCaseList.forEach(item => (byId[item.key] = item));

const initialState = {
  ids: testCaseList.map(item => item.key),
  byId
};

export const gridRows = (state = initialState, action = {}) => {
  console.log(state);
  switch (action.type) {
    case "UPDATE_ITEM":
      const newState = {
        ...state,
        byId: {
          ...state.byId,
          [action.id]: action.payload
        }
      };
      console.log(newState);
      return newState;
  }
  return state;
};
