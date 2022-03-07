import { combineReducers } from 'redux';
import userReducers from './user.reducer';

const reducer = combineReducers({
  users: userReducers,
});

export default reducer;
