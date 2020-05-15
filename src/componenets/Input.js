import React, { useCallback } from "react";

export default ({ dispatch, actionType, value, ...props }) => {
  const valueChanged = useCallback(e => {
    dispatch({ type: actionType, payload: e.target.value });
  }, []);
  return (
    <input
      onChange={valueChanged}
      value={value}
      name={actionType}
      type="text"
      {...props}
    />
  );
};
