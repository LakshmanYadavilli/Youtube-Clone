import React from "react";

const ButtonList = ({ text }) => {
  return (
    <button className="p-2 m-2 bg-gray-300 font-bold rounded-lg cursor-pointer">
      {text}
    </button>
  );
};

export default ButtonList;
