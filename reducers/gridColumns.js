const initialGridColumnsState = {
  ids: ["key", "name", "environment"],
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
  return state;
};
