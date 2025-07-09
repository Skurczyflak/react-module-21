
// actions
//const createActionName = actionName => `app/statuses/${actionName}`;

//selectors
export const getAllTables = ({statuses}) => statuses;

// action creators


const statusesReducer = (statePart = [], action) => {
  switch (action.type) {
    default:
      return statePart;
  };
};

export default statusesReducer;