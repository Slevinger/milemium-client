import React, { useContext, useReducer, useCallback } from "react";
import { Context as ProfilesContext } from "../context/ProfilesContext";
import profileReducer, {
  initalState as profilesInitalState
} from "../reducers/profileReducer";
import styled from "styled-components";
import { Button } from "./StyledComponents";
import Input from "./Input";
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
      <Input
        value={name}
        actionType="set_name"
        dispatch={dispatch}
        placeholder="Name"
      />
      <Input
        value={bio}
        actionType="set_bio"
        dispatch={dispatch}
        placeholder="Bio"
      />
      <Input
        value={fb_id}
        actionType="set_fb_id"
        dispatch={dispatch}
        placeholder="FaceBook ID"
      />

      <Button
        bgColor={"#58b957"}
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
