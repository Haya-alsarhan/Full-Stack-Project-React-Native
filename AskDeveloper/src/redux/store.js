import {compose, createStore, applyMiddleware} from 'redux';
import { createLogger } from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import reducer from './reducers';
import { createReactNavigationReduxMiddleware } from 'react-navigation-reux-helpers';



const loggerMiddleware = createLogger ({ predicate: (getState, action) => _DEV_});
const navigationMiddleware = createReactNavigationReduxMiddleware ('root', state => state.nav );

function configureStore(initalState){

  const enhancer = compose(
applyMiddleware(
thunkMiddleware,
navigationMiddleware,
loggerMiddleware,
),
  );
  return createStore (reducer, initialState, enhancer);
}

export default configureStore ({});
