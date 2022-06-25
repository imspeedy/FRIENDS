export const persistFRIENDSs = () => ({
  type: "PERSIST_FRIENDSS"
});
export const addText = value => ({
  type: "ADD_TEXT",
  payload: value
});
export const addFRIENDS = FRIENDS => ({
  type: "ADD_FRIENDS",
  payload: FRIENDS
});

export const deleteFRIENDS = key => ({
  type: "DELETE_FRIENDS",
  payload: key
});

export const editFRIENDS = key => ({
  type: "EDIT_FRIENDS",
  payload: key
});
export const preferenceFRIENDS = key => ({
  type: "PREFERENCE_FRIENDS",
  payload: key
});
export const rempreferenceFRIENDS = key => ({
  type: "REMPREFERENCE_FRIENDS",
  payload: key
});

export const editAddFRIENDS = obj => ({
  type: "EDIT_ADD_FRIENDS",
  payload: obj
});

export const deleteAll = () => ({
  type: "DELETE_ALL"
});
