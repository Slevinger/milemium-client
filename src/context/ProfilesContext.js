import createDataContext from "./createDataContext";
import profilesApi from "../api/profilesApi";
import {
  ADD_PROFILES,
  REMOVE_PROFILE,
  UPDATE_PROFILE,
  SET_CURRENT_PROFILE,
  GET_PROFILE
} from "../consts/Actions";
const profilesReducer = (state, { type, payload }) => {
  switch (type) {
    case ADD_PROFILES:
      const { profiles: profilesToAdd } = payload;
      return { ...state, profiles: [...state.profiles, ...profilesToAdd] };
      break;
    case REMOVE_PROFILE:
      const { profile: profileToRemove } = payload;
      return {
        ...state,
        profiles: state.filter(profile => profile._id !== profileToRemove._id)
      };
    case UPDATE_PROFILE:
      const { profile: profileToUpdate } = payload;
      const profiles = Array.from(state.profiles);
      profiles.splice(
        profiles.findIndex(({ _id }) => profileToUpdate._id === _id),
        1,
        profileToUpdate
      );
      return { ...state, profiles };
    case SET_CURRENT_PROFILE:
      return {
        ...state,
        currentProfile: state.profiles.find(({ _id }) => _id === payload)
      };

    default:
      return state;
  }
};

const getProfile = dispatch => async id => {
  const {
    data: { data },
    error
  } = await profilesApi.get(`/profiles${id ? `/${id}` : ""}`);
  if (error) {
    return console.log(error);
  }
  return data;
};

const getProfileImage = dispatch => async fb_id => {};

const fetchProfiles = dispatch => async id => {
  const {
    data: { data },
    error
  } = await profilesApi.get(`/profiles`);
  if (error) {
    return console.log(error);
  }

  dispatch({ type: ADD_PROFILES, payload: { profiles: data } });
};
const addProfile = dispatch => async ({ name, bio, fb_id }) => {
  const {
    data: { data },
    error
  } = await profilesApi.post("/profiles", {
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
    data: {
      data: { _id }
    },
    error
  } = await profilesApi.delete(`/profiles/${id}`);
  if (error) {
    return console.log(error);
  }
  dispatch({ type: REMOVE_PROFILE, payload: { profile: _id } });
};

const updateProfile = dispatch => async details => {
  const {
    data: { data },
    error
  } = await profilesApi.put("/profiles", details, {
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
    getProfile,
    setCurrentProfile
  },
  { profiles: [], currentUser: null }
);
