
import { API_URL, useAppJson } from '../config';

// actions
const createActionName = actionName => `app/tables/${actionName}`;
const UPDATE_TABLE = createActionName('UPDATE_TABLE');
const UPDATE_TABLES = createActionName('UPDATE_TABLES');

//selectors
export const getAllTables = ({tables}) => tables;
export const getTableById = ({tables}, id) => tables.find(table => table.id === id);

// action creators
export const updateTable = (payload) => ({ type: UPDATE_TABLE, payload });
export const updateTables = (payload) => ({ type: UPDATE_TABLES, payload });

//fetch data
export const fetchTables = () => {
  return (dispatch) => {
  if(useAppJson){
    fetch('db/app.json')
    .then(res => res.json())
    .then(data => dispatch(updateTables(data.tables)));
    
  }else{
    fetch(`${API_URL}/tables`)
    .then(res => res.json())
    .then(tables => dispatch(updateTables(tables)));
  }
  }
};

export const updateTablesRequest = (table) => {
  return (dispatch) => {
    const options = {
      method: 'PUT',

      headers: {
        'Content-Type': 'application/json'
      },

      body: JSON.stringify({
        ...table
      })
    };
    if(useAppJson){ 
       dispatch(updateTable(table));

    }else{
      fetch(`${API_URL}/tables/${table.id}`, options)
        .then(() => dispatch(updateTable(table)));
    }

  }
}

const tablesReducer = (statePart = [], action) => {
  switch (action.type) {
    case UPDATE_TABLE:
        return statePart.map(table => table.id === action.payload.id ? action.payload : table);
    case UPDATE_TABLES:
      return [...action.payload];
    default:
      return statePart;
  };
};

export default tablesReducer;