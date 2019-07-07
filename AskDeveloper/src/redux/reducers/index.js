import { combinReducers } from 'redux';
import * as LoggedOut from './loggedOut';
import * as Navigation from './navigation';

export default combinReducers(Object.assign(

  LoggedOut,
  Navigation,
));
