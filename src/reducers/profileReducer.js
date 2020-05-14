export const initalState = { name: "", fb_id: "", bio: "" };

// reducer to manage a profile data

export default (state, { type, payload }) => {
  switch (type) {
    case "set_name":
      return { ...state, name: payload };
    case "set_fb_id":
      return { ...state, fb_id: payload };
    case "set_bio":
      return { ...state, bio: payload };
    case "reset":
      return initalState;
    default:
      return state;
  }
};
