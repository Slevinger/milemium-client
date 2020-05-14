import createDataContext from "./createDataContext";
import profilesApi from "../api/profilesApi";
import {
  ADD_USERS,
  REMOVE_USER,
  UPDATE_USER,
  GET_USERS
} from "../consts/Actions";
const profilesReducer = (state, { type, payload }) => {
  switch (type) {
    case ADD_USERS:
      const { users: usersToAdd } = payload;
      return [...state, ...usersToAdd];
      break;
    case REMOVE_USER:
      const { user: userToRemove } = payload;
      return state.filter(user => user._id !== userToRemove._id);
    case UPDATE_USER:
      const { user: userToUpdate } = payload;
      const users = Array.from(state.users);
      users.splice(
        users.findIndex(({ _id }) => userToUpdate._id === _id),
        1,
        userToUpdate
      );
      return users;
    default:
      return state;
  }
};

const getProfile = dispatch => async id => {
  const { data, error } = await profilesApi.get(
    `/profiles${id ? `/${id}` : ""}`
  );
  if (error) {
    return console.log(error);
  }
  return data;
};

const fetchProfiles = dispatch => async id => {
  const { data, error } = await profilesApi.get(
    `/profiles${id ? `/${id}` : ""}`
  );
  if (error) {
    return console.log(error);
  }
  let payload = { users: [] };
  if (typeof data === "array") {
    payload.users = data;
  } else {
    payload.users.push(data);
  }
  dispatch({ type: ADD_USERS, payload });
};
const addProfile = dispatch => async (name, bio, fb_id) => {
  const { data, error } = await profilesApi.post("/profiles", {
    name,
    bio,
    fb_id
  });
  if (error) {
    return console.log(error);
  }
  dispatch({ type: ADD_USERS, payload: { users: [data] } });
};

const removeProfile = dispatch => async id => {
  const {
    data: { _id },
    error
  } = await profilesApi.delete(`/profiles/${id}`);
  if (error) {
    return console.log(error);
  }
  dispatch({ type: REMOVE_USER, payload: { user: _id } });
};

const updateProfile = dispatch => async details => {
  const { data, error } = await profilesApi.put("/profiles", {
    "Content-Type": "application/json"
  });
  if (error) {
    return console.log(error);
  }
  dispatch({ type: UPDATE_USER, payload: { user: data } });
};

export const { Provider, Context } = createDataContext(
  profilesReducer,
  { fetchProfiles, addProfile, removeProfile, updateProfile, getProfile },
  []
);
