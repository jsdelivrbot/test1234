import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default  function g_categorReducer(state = initialState.g_categories, action) {
  switch (action.type) {

    case types.LOAD_G_CATEGORIES_SUCCESS:
      return action.categories;

      default:
        return state;
  }
}
