import React from "react";
import { useDispatch } from "react-redux";

const Home = () => {
  const dispatch = useDispatch();

  const addBtn = () => {
    dispatch({
      type: "increment",
    });
  };
  const subBtn = () => {
    dispatch({
      type: "decrement",
    });
  };
  const addBtn25 = () => {
    dispatch({
      type: "incrementByValue",
      payload: 25,
    });
  };

  return (
    <div>
      <button onClick={addBtn}>Increment</button>
      <button onClick={addBtn25}>Increment By 25</button>
      <button onClick={subBtn}>Decrement</button>
    </div>
  );
};

export default Home;
