import React, { useContext, useCallback } from "react";
import styled from "styled-components";
import { Context as ProfilesContext } from "../context/ProfilesContext";
import { Button } from "./StyledComponents";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
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
  svg {
    cursor: pointer;
    margin-right: 10px;
  }
  .profile-name-tile {
    flex: 1;
    margin-left: 24px;
  }
  @media (max-width: 480px) {
    width: 100%;
    /* big landscape tablets, laptops, and desktops */
  }
`;

export default ({ _id, name }) => {
  const { setCurrentProfile, removeProfile } = useContext(ProfilesContext);
  const setCurrentProfileAction = useCallback(() => {
    setCurrentProfile(_id);
  }, [_id, setCurrentProfile]);
  const removeProfileAction = useCallback(() => {
    debugger;
    removeProfile(_id);
  }, [_id, removeProfile]);
  return (
    <ProfileTile>
      <div className="profile-name-tile">{name}</div>
      <Button onClick={setCurrentProfileAction}>Edit</Button>

      <DeleteForeverIcon
        title="Remove"
        onClick={removeProfileAction}
        style={{ color: "red" }}
      />
    </ProfileTile>
  );
};
