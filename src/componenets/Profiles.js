import React, { useContext, useEffect } from "react";
import { Context as ProfilesContext } from "../context/ProfilesContext";
import styled from "styled-components";
import Profile from "./Profile";
import ProfileDialog from "./ProfileDialog";

const ProfilesWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
`;

export default () => {
  const {
    state: { profiles },
    fetchProfiles
  } = useContext(ProfilesContext);

  useEffect(() => {
    fetchProfiles();
  }, []);

  return (
    <ProfilesWrapper>
      <ProfileDialog />
      {profiles.map(profile => (
        <Profile {...profile} />
      ))}
    </ProfilesWrapper>
  );
};
