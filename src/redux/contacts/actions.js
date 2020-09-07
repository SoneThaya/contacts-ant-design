const { ADD_CONTACT, DELETE_CONTACT } = require("./actionTypes")

export const addContact = (contact) => {
  return (dispatch) => {
    dispatch({
      type: ADD_CONTACT,
      payload: contact
    });
  };
};

export const deleteContact = (key) => {
  return (dispatch) => {
    dispatch({
      type: DELETE_CONTACT,
      payload: key
    });
  };
};