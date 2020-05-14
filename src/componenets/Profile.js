import React, { useContext } from "react";
import styled from "styled-components";
import { Context as ProfilesContext } from "../context/ProfilesContext";
import { Button } from "./StyledComponents";

const ProfileTile = styled.div`
  border-radius: 5px;
  width: 30%;
  display: flex;
  flex-direction: row;
  background-color: rgba(220, 220, 220, 0.5);
  font-size: 20px;
  height: 60px;
  margin: 5px;
  align-items: center;
  .profile-name-tile {
    flex: 1;
    margin-left: 24px;
  }
`;

export default ({ _id, name }) => {
  const { setCurrentProfile } = useContext(ProfilesContext);
  return (
    <ProfileTile>
      <div className="profile-name-tile">{name}</div>
      <Button
        onClick={() => {
          setCurrentProfile(_id);
        }}
      >
        Edit
      </Button>
    </ProfileTile>
  );
};
