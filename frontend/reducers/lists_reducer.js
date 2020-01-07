import { RECEIVE_LISTS, RECEIVE_LIST, REMOVE_LIST } from '../actions/lists_actions';


const listsReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  let nextState = Object.assign( {}, oldState );
  switch (action.type) {
    case RECEIVE_LISTS:
        action.lists.forEach(list => {
          nextState[list.id]=list
        });
        return nextState;

    case RECEIVE_LIST:
        let list = action.list;
        nextState[action.list.id]=list;     
        return nextState;

    case REMOVE_LIST:
      delete nextState[action.listId];
      return nextState;

    default:
      return oldState;
  }
};

export default listsReducer;