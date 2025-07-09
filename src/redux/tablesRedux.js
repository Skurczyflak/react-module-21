
// actions
const createActionName = actionName => `app/tables/${actionName}`;
const DELETE_TABLE = createActionName('DELETE_TABLE');
const ADD_TABLE = createActionName('ADD_TABLE');
const EDIT_TABLE = createActionName('EDIT_TABLE');
//selectors
export const getAllTables = ({tables}) => tables;
export const getTableById = ({tables}, id) => tables.find(table => table.id === id);

// action creators
export const deleteTable = (payload) => ({ type: DELETE_TABLE, payload });
export const addTable = (payload) => ({type: ADD_TABLE, payload});
export const editTable = (payload) =>({type: EDIT_TABLE, payload});

const tablesReducer = (statePart = [], action) => {
  switch (action.type) {
    // case ADD_POST:
    //     return [...statePart, { ...action.payload }];
    // case DELETE_POST:
    //     return statePart.filter(post => post.id !== action.payload);
    // case EDIT_POST:
    //     return statePart.map(post => (post.id === action.payload.id ? { ...post, ...action.payload } : post));
    default:
      return statePart;
  };
};

export default tablesReducer;