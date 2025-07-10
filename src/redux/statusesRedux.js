
import { API_URL } from '../config';

// actions
const createActionName = actionName => `app/statuses/${actionName}`;
const UPDATE_STATUSES = createActionName('UPDATE_STATUSES');

//selectors
export const getAllStatuses = ({statuses}) => statuses;

// action creators
export const updatedStatuses = (payload) => ({ type: UPDATE_STATUSES, payload });

//fetch data
export const fetchStatuses = () => {
  return (dispatch) => {
    fetch(`${API_URL}/statuses`)
    .then(res => res.json())
    .then(statuses => dispatch(updatedStatuses(statuses)));
  }
  };

const statusesReducer = (statePart = [], action) => {
  switch (action.type) {
    case UPDATE_STATUSES:
      return [...action.payload];
    default:
      return statePart;
  };
};

export default statusesReducer;