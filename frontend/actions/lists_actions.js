import * as UTILLists from '../util/lists_api_util';

export const RECEIVE_LISTS = 'RECEIVE_LISTS';
export const RECEIVE_LIST = 'RECEIVE_LIST';
export const REMOVE_LIST = 'DELETE_LIST'

export const LIST_ERRORS = 'LIST_ERRORS';
export const CLEAR_LIST_ERRORS = 'CLEAR_LIST_ERRORS';


export const receiveLists = (lists) => {
    
    return({
        type: RECEIVE_LISTS,
        lists
    })
}
export const receiveList = (list) => {
    //let ID = report.id;
    return({
        type: RECEIVE_LIST,
        list
    })
}
export const removeList = (id) => {

    return({
        type: REMOVE_LIST,
        listId: id
    })
}

export const receiveListsErrors = errors => ({
    type: LIST_ERRORS,
    errors
});
  
  export const clearListsErrors = () => {
    //debugger;
    return(
      {
        type:CLEAR_LIST_ERRORS
      }
    )
};



export const fetchLists = () => dispatch => UTILLists.fetchLists()
.then(response => {
    dispatch(receiveLists(response));
    dispatch(clearListsErrors());
},
err => dispatch(receiveListsErrors(err.responseJSON))
);

export const fetchList = (id) => dispatch => UTILLists.fetchList(id)
.then(response => {
    dispatch(receiveList(response));
    dispatch(clearListsErrors());
},
err => dispatch(receiveListsErrors(err.responseJSON))
);

export const createList = (list) => dispatch => UTILLists.createList(list)
.then(response => {
    dispatch(receiveList(response));
    dispatch(clearListsErrors());
},
err => dispatch(receiveListsErrors(err.responseJSON))
);

export const updateList = (list) => dispatch => UTILLists.updateList(list)
.then(response => {
    dispatch(receiveList(response));
    dispatch(clearListsErrors());
},
err => dispatch(receiveListsErrors(err.responseJSON))
);

export const deleteList = (id) => dispatch => UTILLists.deleteList(id)
.then(response => {
    dispatch(removeList(response.id))
    dispatch(clearListsErrors());
},
err => dispatch(receiveListsErrors(err.responseJSON))
);




