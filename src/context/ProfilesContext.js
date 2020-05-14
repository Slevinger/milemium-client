import createDataContext from "./createDataContext";
import profilesApi from "../api/profilesApi";
import profilesReducer, { initialState } from "../reducers/profilesReducer";
import {
  ADD_PROFILES,
  REMOVE_PROFILE,
  UPDATE_PROFILE,
  SET_CURRENT_PROFILE
} from "../consts/Actions";

const fetchProfiles = dispatch => async id => {
  const { data, error } = await profilesApi.get(`/profiles`);
  if (error) {
    return console.log(error);
  }
  dispatch({ type: ADD_PROFILES, payload: { profiles: data } });
};

const addProfile = dispatch => async ({ name, bio, fb_id }) => {
  const { data, error } = await profilesApi.post("/profiles", {
    name,
    bio,
    fb_id
  });
  if (error) {
    return console.log(error);
  }
  dispatch({ type: ADD_PROFILES, payload: { profiles: [data] } });
};

const setCurrentProfile = dispatch => profileId => {
  dispatch({ type: SET_CURRENT_PROFILE, payload: profileId });
};

const removeProfile = dispatch => async id => {
  const {
    data: { _id },
    error
  } = await profilesApi.delete(`/profiles/${id}`);
  if (error) {
    return console.log(error);
  }
  dispatch({ type: REMOVE_PROFILE, payload: { profile: _id } });
};

const updateProfile = dispatch => async details => {
  const { data, error } = await profilesApi.put("/profiles", details, {
    "Content-Type": "application/json"
  });
  if (error) {
    return console.log(error);
  }
  dispatch({ type: UPDATE_PROFILE, payload: { profile: data } });
};

export const { Provider, Context } = createDataContext(
  profilesReducer,
  {
    fetchProfiles,
    addProfile,
    removeProfile,
    updateProfile,
    setCurrentProfile
  },
  initialState
);
