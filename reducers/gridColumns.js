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
  }
  return state;
};
