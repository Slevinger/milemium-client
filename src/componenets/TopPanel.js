import React, { useContext, useReducer, useCallback } from "react";
import { Context as ProfilesContext } from "../context/ProfilesContext";
import profileReducer, {
  initalState as profilesInitalState
} from "../reducers/profileReducer";
import styled from "styled-components";
import { Button } from "./StyledComponents";

const TopPanel = styled.div`
  position: relative;
  background-color: black;
  display: flex;
  height: 50px;
  flex-direction: row;
  align-items: center;

  input {
    margin: 5px 2px;
    line-height: 20px;
    font-size: 20px;
    height: 30px;
    border-radius: 5px;
    border-width: 2px;
    @media (max-width: 480px) {
      width: 95px;
    }
  }
`;

//`http://graph.facebook.com/${fb_id}/picture?type=square`
export default () => {
  const { addProfile } = useContext(ProfilesContext);
  const [{ name, bio, fb_id }, dispatch] = useReducer(
    profileReducer,
    profilesInitalState
  );

  return (
    <TopPanel>
      <input
        onChange={e => {
          dispatch({ type: "set_name", payload: e.target.value });
        }}
        value={name}
        name="name"
        placeholder="Name"
        type="text"
      />
      <input
        onChange={e => {
          dispatch({ type: "set_bio", payload: e.target.value });
        }}
        value={bio}
        name="bio"
        placeholder="Bio"
        type="text"
      />
      <input
        onChange={e => {
          dispatch({ type: "set_fb_id", payload: e.target.value });
        }}
        value={fb_id}
        name="fb_id"
        placeholder="FaceBook Id"
        type="text"
      />
      <Button
        color={"#58b957"}
        onClick={() => {
          addProfile({ name, bio, fb_id });
          dispatch({ type: "reset" });
        }}
      >
        Create
      </Button>
    </TopPanel>
  );
};
