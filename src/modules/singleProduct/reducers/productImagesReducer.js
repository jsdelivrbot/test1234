import * as types from '../constans/actionTypes';
import initialState from '../../../reducers/initialState';

export default  function df(state = initialState.img, action) {
  switch (action.type) {

    case types.LOAD_SINGLE_PRODUCT_IMEGESUCCESS:
      return action.img;

      default:
        return state;
  }
}