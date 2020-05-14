import styled from "styled-components";

export const Button = styled.div`
  height: 30px;
  background-color: ${({ color }) => color || "#2f78b9"};
  border: solid thin;
  color: white;
  margin: 5px 2px;

  margin-right: 25px;
  padding: 5px 20px;
  display: inline-flex;
  align-items: center;
  border: none;
  font-size: 16px;
  font-weight: 700;
  border-radius: 7px;
  z-index: 2;
  &:hover {
    cursor: pointer;
  }
`;
