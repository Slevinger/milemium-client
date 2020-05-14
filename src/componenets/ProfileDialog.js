import React, { useContext } from "react";
import { Context as ProfilesContext } from "../context/ProfilesContext";
import Dialog from "./helpers/Dialog";
import EditProfile from "./EditProfile";

export default () => {
  const {
    state: { currentProfile },
    setCurrentProfile
  } = useContext(ProfilesContext);

  return currentProfile ? (
    <Dialog
      hide={e => {
        const content = e.target.closest(".dialog-content");

        !content && setCurrentProfile(null);
      }}
    >
      <EditProfile />
    </Dialog>
  ) : null;
};
