import { move } from "../helpers";

const moveLeft = (item, list) => move(item, list, index => index - 1);
const moveRight = (item, list) => move(item, list, index => index + 1);

const initialGridColumnsState = {
  ids: ["key", "name", "environment"],
  selectedIds: ["key", "name"],
  byId: {
    key: {
      id: "key",
      name: "Test Case Key"
    },
    name: {
      id: "name",
      name: "Test Case Name"
    },
    environment: {
      id: "environment",
      name: "Environment"
    }
  }
};

export const gridColumns = (state = initialGridColumnsState, action = {}) => {
  switch (action.type) {
    case "TOGGLE_COLUMN":
      const { columnId } = action;

      if (state.selectedIds.includes(columnId)) {
        return {
          ...state,
          selectedIds: state.selectedIds.filter(id => id !== columnId)
        };
      } else {
        return { ...state, selectedIds: [...state.selectedIds, columnId] };
      }
    case "MOVE_RIGHT":
      return { ...state, selectedIds: moveRight(action.id, state.selectedIds) };
    case "MOVE_LEFT":
      return { ...state, selectedIds: moveLeft(action.id, state.selectedIds) };
  }
  return state;
};
