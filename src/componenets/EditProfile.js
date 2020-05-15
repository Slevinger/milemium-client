import React, { useContext, useReducer, useState, useCallback } from "react";
import { Context as ProfilesContext } from "../context/ProfilesContext";
import styled from "styled-components";
import profileReducer from "../reducers/profileReducer";
import { Button } from "./StyledComponents";
import CloseIcon from "@material-ui/icons/Close";
import Input from "./Input";
const ProfileEditor = styled.div`
  z-index: 2;
  background-color: white;
  position: relative;
  width: 50%;

  border-radius: 5px;
  box-shadow: 4px 4px 10px;
  display: flex;
  flex-direction: column;
  input {
    border-radius: 5px;
    width: 100%;
    padding: 5px;
    font-size: 16px;
    border-width: 1px;
  }
  .row {
    padding: 10px;
    display: flex;
    flex-direction: row;

    border-bottom: 1px solid lightgrey;
  }
  .profile-name {
    flex: 1;
    flex-direction: row;
    display: flex;
    align-items: center;
    padding-left: 30px;
    font-size: 18px;
    font-weight: 500;
  }
  .image-container {
    border-radius: 50px;
    overflow: hidden;
    img {
      width: 80px;
      border-radios: 40px;
    }
  }
`;

const Icon = styled(CloseIcon)`
  position: absolute;
  right: 20px;
  top: 20px;
  color: lightgrey;
  &:hover {
    cursor: pointer;
  }
`;
//`http://graph.facebook.com/${fb_id}/picture?type=square`
export default () => {
  const {
    state: { currentProfile },
    updateProfile,
    setCurrentProfile
  } = useContext(ProfilesContext);
  const { _id } = currentProfile;
  const [{ name, bio, fb_id }, dispatch] = useReducer(
    profileReducer,
    currentProfile
  );

  const closeDialog = useCallback(() => {
    setCurrentProfile(null);
    dispatch({ type: "reset" });
  }, [setCurrentProfile, dispatch]);
  return (
    <ProfileEditor className="dialog-content">
      <Icon />
      <div className="row">
        <div className="image-container">
          <img
            src={`http://graph.facebook.com/${currentProfile.fb_id}/picture?type=square`}
          />
        </div>
        <div className="profile-name">Edit {currentProfile.name}</div>
      </div>
      <div style={{ flex: 1 }}>
        <div className="row">
          <Input
            value={name}
            actionType="set_name"
            dispatch={dispatch}
            placeholder="Name"
          />
        </div>
        <div className="row">
          <Input
            value={bio}
            actionType="set_bio"
            dispatch={dispatch}
            placeholder="Bio"
          />
        </div>
        <div className="row">
          <Input
            value={fb_id}
            actionType="set_fb_id"
            dispatch={dispatch}
            placeholder="FaceBook ID"
          />
        </div>
      </div>
      <div className="row">
        <div style={{ flex: 1 }} />
        <Button onClick={closeDialog}>Close</Button>
        <Button
          onClick={() => {
            updateProfile({ _id, name, bio, fb_id });
            setCurrentProfile(null);
          }}
        >
          Save Changes
        </Button>
      </div>
    </ProfileEditor>
  );
};
