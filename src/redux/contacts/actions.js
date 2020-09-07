const { ADD_CONTACT } = require("./actionTypes")

const addContact = (contact) => {
  return (dispatch) => {
    dispatch({
      type: ADD_CONTACT,
      payload: contact
    });
  };
};