import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addComment } from "../utils/videosSlice";
import { v4 } from "uuid";

const Comments = ({ id }) => {
  const data = useSelector((state) => state.videoData.videos);
  const [isActive, setIsActive] = useState(false);
  const [commentText, setCommentText] = useState("");
  const dispatch = useDispatch();
  const namesArr = [
    "Ram",
    "Vijay",
    "Rahul",
    "Deepika",
    "Ishitha",
    "Raj",
    "Mounika",
    "Suraj",
    "Ravi",
    "Varun",
    "Divya",
    "Kiran",
  ];
  const randomName = () => {
    const val = Math.floor(Math.random() * namesArr.length);
    return namesArr[val];
  };

  return (
    <div className="border-red border-2 border-solid w-[60%]">
      <div className="h-auto shadow-lg p-2">
        <input
          value={commentText}
          type="text"
          placeholder="Add Comment "
          className="outline-none border-b-2 w-full mb-2"
          onChange={(e) => setCommentText(e.target.value)}
          onFocus={() => setIsActive(true)}
        />
        {isActive && (
          <div className="flex justify-end items-center">
            <button
              className="bg-gray-400 p-2 mr-2"
              onClick={() => {
                console.log("from cancel");
                setIsActive(false);
                setCommentText("");
              }}
            >
              Cancel
            </button>
            <button
              className="bg-blue-600 p-2 rounded-md"
              onClick={() => {
                console.log("from Comment");
                setIsActive(false);

                commentText !== "" &&
                  dispatch(
                    addComment({
                      id,
                      details: [
                        v4(),
                        {
                          name: randomName(),
                          comment: commentText,
                          replies: [],
                        },
                      ],
                    })
                  );
                setCommentText("");
              }}
            >
              Comment
            </button>
          </div>
        )}
      </div>
      <h1 className="text-2xl font-bold">Comments:</h1>
      {data[id] &&
        Object.keys(data[id].comments).map((item, index) => {
          const comment = data[id].comments[item];
          return (
            <div key={index}>
              <div className="flex justify-start items-center border-l-2 border-blue-700 p-2 shadow-md mb-2">
                <div className="w-8 h-8 rounded-[50%] bg-green-300 text-center flex justify-center items-center mr-2">
                  <h1 className="font-bold">
                    {" "}
                    {comment.name.charAt(0).toUpperCase()}
                  </h1>
                </div>
                <div>
                  <h1 className="font-bold">{comment.name}</h1>
                  <h1>{comment.comment}</h1>
                </div>
              </div>
              {comment.replies.length !== 0 && (
                <div>
                  <h1 className="text-2xl font-bold pl-6">Replies:</h1>
                  <div className="pl-6 ">
                    {comment.replies.map((item, index) => (
                      <div
                        key={index}
                        className="flex mb-2 justify-start items-center border-l-2 border-blue-700 p-2 shadow-2xl"
                      >
                        <div className="w-8 h-8 rounded-[50%] bg-green-300 text-center flex justify-center items-center mr-2">
                          <h1 className="font-bold">
                            {" "}
                            {item.name.charAt(0).toUpperCase()}
                          </h1>
                        </div>
                        <div>
                          <h1 className="font-bold">{item.name}</h1>
                          <h1>{item.comment}</h1>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          );
        })}
    </div>
  );
};

export default Comments;
