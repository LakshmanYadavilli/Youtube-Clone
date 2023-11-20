import React from "react";

const LiveChat = ({ data }) => {
  console.log({ data });
  return (
    <div>
      <span className="text-lg font-bold">{data.name}</span>:{data.comment}
    </div>
  );
};

export default LiveChat;
