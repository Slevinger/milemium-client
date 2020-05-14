import {
  ADD_PROFILES,
  REMOVE_PROFILE,
  UPDATE_PROFILE,
  SET_CURRENT_PROFILE
} from "../consts/Actions";

export const initialState = { profiles: [], currentUser: null };

export default (state, { type, payload }) => {
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
