import React from "react";
import { clearGroceries } from "../../../actions/groceries";
import { useDispatch } from "react-redux";

const Clear = () => {
  const dispatch = useDispatch();
  
  const clearData = () => {
    if (window.confirm("Delete EVERYTHING?")) {
      dispatch(clearGroceries());
      window.alert("Database now empty");
    }
  };

  return (
    <div>
      <button onClick={clearData}>Clear Data</button>
    </div>
  );
};

export default Clear;
