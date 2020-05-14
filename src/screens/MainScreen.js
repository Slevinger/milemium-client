import React from "react";
import TopPanel from "../componenets/TopPanel";
import Profiles from "../componenets/Profiles";
import styled from "styled-components";

const App = styled.div`
  @media (max-width: 480px) {
    width: 100%;
    position: absolute;
  }
  top: 0;
  bottom: 0;
  left: 0;
`;

export default () => {
  return (
    <App>
      <TopPanel />
      <Profiles />
    </App>
  );
};
