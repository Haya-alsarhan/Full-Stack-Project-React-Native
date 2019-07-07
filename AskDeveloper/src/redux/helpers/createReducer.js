export default function createReducer(intialState,handlers){

  return function reducer(state = intialState, action) {

    if (handlers.hasOwnProprty(actin.type)){

      return handlers[action.type](state,action);
    }
  return state;  
  }
}
