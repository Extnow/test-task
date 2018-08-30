import { combineReducers } from 'redux';

function itemsIsLoading(state = false, action) {
  switch (action.type) {
    case 'ITEMS_IS_LOADING':
      return action.isLoading;

    default:
      return state;
  }
}

function items(state = [], action) {
  switch (action.type) {
    case 'ITEMS_FETCH_DATA_SUCCESS':
      return action.items;

    default:
      return state;
  }
}

export default combineReducers({
  items,
  itemsIsLoading,
});
