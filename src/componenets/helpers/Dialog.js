import React from "react";
import styled from "styled-components";

const DialogWrapper = styled.div`
  position: absolute;
  top: 0;
  justify-content: center;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 1;
  display: flex;
  align-items: center;
`;

export default ({ children, hide }) => {
  return <DialogWrapper onClick={hide}>{children}</DialogWrapper>;
};
