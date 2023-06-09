import React, { useRef, useEffect } from "react";
import questionImage from "../src/vecteezy_knowledgeable-cutie-3d-cute-girl-in-professor-character-with_22484107_704.png";
import user from "../src/USER.png";
import InputForm from "./inputForm";
import { faClone, faCheck, faArrowDown, faHouse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PropagateLoader } from 'react-spinners';

const Chats = ({ question, output, time, handleChange, handleSubmit, value, isLoading }) => {
  const [isCopied, setIsCopied] = useState(-1);
  const [scrollToBottom, setScrollToBottom] = useState(false);
  const navigate = useNavigate();

  const scrollToBottomHandler = () => {
    setScrollToBottom(true);
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (scrollToBottom) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
      setScrollToBottom(false);
    }
  }, [scrollToBottom]);

  const copyToClipboard = (text, index) => {
    navigator.clipboard.writeText(text).then(
      () => {
        setIsCopied(index);
        setTimeout(() => {
          setIsCopied(-1);
        }, 1000);
      },
      (err) => {
        console.error("Could not copy text: ", err);
      }
    );
  };

  const pairs = question.map((q, index) => ({
    question: q,
    answer: output[index] ? output[index].content : "",
    timestamp: time[index],
  }));

  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  });

  return (
    <div className="flex flex-col justify-center items-center" style={{ paddingBottom: "100px" }}>
      <button className="navigate-home-button bg-[rgb(25,167,206)] sticky top-0 w-full" onClick={() => navigate("/")}>
        <FontAwesomeIcon icon={faHouse} />
      </button>
      {pairs.map((pair, index) => (
        <div key={`pair-${index}`} className="w-screen">
          <div className="bg-[rgb(42,47,79)] text-white p-4 flex flex-row-reverse justify-between text-left">
            <span className="text-sm text-[rgb(145,127,179)] justify-end items-end flex flex-col w-1/12">
              {pair.timestamp}
            </span>
            <div className="flex w-5/6 items-start">
              <img
                src={user}
                alt="Question"
                className="mr-2 rounded-md"
                style={{
                  height: "30px",
                  width: "30px",
                  backgroundColor: "white",
                }}
              />
              <div>{pair.question}</div>
            </div>
          </div>
          {pair.answer && (
            <div className="bg-[rgb(253,226,243)] text-[rgb(42,47,79)] p-4 flex flex-col-reverse text-left">
              <span className="text-sm text-[rgb(229,190,236)] flex flex-col items-end justify-end">
                <div>
                  {isCopied === index ? (
                    <FontAwesomeIcon icon={faCheck} style={{ marginRight: "6px" }} className="mr-6" />
                  ) : (
                    <FontAwesomeIcon
                      icon={faClone}
                      style={{ marginRight: "6px" }}
                      className="custom-hover-color mr-6"
                      onClick={() => copyToClipboard(pair.answer, index)}
                    />
                  )}
                  {pair.timestamp}
                </div>
              </span>
              <div className="flex flex-row">
                <img
                  src={questionImage}
                  alt="Question"
                  className="mr-2 rounded-md"
                  style={{
                    height: "30px",
                    width: "30px",
                    backgroundColor: "white",
                  }}
                />
                <div>{pair.answer}</div>
              </div>
            </div>
          )}
        </div>
      ))}
      <div>
        {isLoading && (
          <PropagateLoader color="#36d7b7" size={10} speedMultiplier={1} style={{ bottom: "90px", position: "fixed" }} />
        )}
        <InputForm handleChange={handleChange} handleSubmit={handleSubmit} value={value} />
      </div>

      <div style={{ float: "left", clear: "both" }} ref={messagesEndRef}></div>

      <button className="scroll-to-bottom-button " onClick={scrollToBottomHandler}>
        <FontAwesomeIcon icon={faArrowDown} />
      </button>
    </div>
  );
};

export default Chats;
