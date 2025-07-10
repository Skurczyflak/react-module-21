
// actions
const createActionName = actionName => `app/tables/${actionName}`;
const UPDATE_TABLE = createActionName('UPDATE_TABLE');
//selectors
export const getAllTables = ({tables}) => tables;
export const getTableById = ({tables}, id) => tables.find(table => table.id === id);

// action creators
export const updateTable = (payload) => ({ type: UPDATE_TABLE, payload });

const tablesReducer = (statePart = [], action) => {
  switch (action.type) {
    case UPDATE_TABLE:
        return statePart.map(table => {
          if (table.id === action.payload.id) {
            const updatedTable = { ...table, ...action.payload };
            if (updatedTable.status === 'free' || updatedTable.status === 'cleaning') {
              return { ...updatedTable, booked: '', capacity: '', bill: '' };
            }
            return updatedTable;
          }
          return table;
        });
    default:
      return statePart;
  };
};

export default tablesReducer;