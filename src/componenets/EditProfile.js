import React, { useContext, useReducer, useState } from "react";
import { Context as ProfilesContext } from "../context/ProfilesContext";
import styled from "styled-components";
import profileReducer from "../reducers/profileReducer";
import { Button } from "./StyledComponents";
const ProfileEditor = styled.div`
  z-index: 2;
  background-color: white;
  width: 50%;

  border-radius: 5px;
  box-shadow: 4px 4px 10px;
  display: flex;
  flex-direction: column;
  .row {
    padding: 10px;
    display: flex;
    flex-direction: row;

    input {
      border-radius: 5px;
      width: 100%;
      padding: 5px;
      font-size: 16px;
      border-width: 1px;
    }
    &:first-child {
      border-bottom: 1px solid lightgrey;
    }
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
  return (
    <ProfileEditor className="dialog-content">
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
          <input
            onChange={e => {
              dispatch({ type: "set_name", payload: e.target.value });
            }}
            value={name}
            name="name"
            placeholder="Name"
            type="text"
          />
        </div>
        <div className="row">
          <input
            onChange={e => {
              dispatch({ type: "set_bio", payload: e.target.value });
            }}
            value={bio}
            name="bio"
            placeholder="Bio"
            type="text"
          />
        </div>
        <div className="row">
          <input
            onChange={e => {
              dispatch({ type: "set_fb_id", payload: e.target.value });
            }}
            value={fb_id}
            name="fb_id"
            placeholder="FaceBook Id"
            type="text"
          />
        </div>
      </div>
      <div className="row">
        <div style={{ flex: 1 }} />
        <Button
          onClick={() => {
            setCurrentProfile(null);
          }}
        >
          Close
        </Button>
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
