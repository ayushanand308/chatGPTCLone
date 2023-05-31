import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import InputForm from './inputForm';

const Home = ({
  question,
  setQuestion,
  output,
  SetOutput,
  time,
  SetTime,
  value,
  setValue,
  handleChange,
  handleSubmit,
}) => {
    const navigate=useNavigate();
    const handleQuestionClick = (question) => {
        // Set the clicked question as the value
        setValue(question);
        // Generate the output for the clicked question
        // Navigate to the chats page
        navigate('/chats');
      };


      const generateOutput = async (value) => {
        const options={
        method:"POST",
        body:JSON.stringify({
            message:value,
        }),
        headers:{
            "Content-Type":"application/json"
        }
    }
    
    try {
        const response = await fetch('http://localhost:8000/completions', options);
        const data = await response.json();
        console.log(data.choices[0].message);
        SetOutput([...output,data.choices[0].message]);
    } catch (error) {
        console.error('Error', error);
    }
        
    };



  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen py-10"
      style={{ backgroundColor: 'rgb(246, 241, 241)' }}
    >
      <h1 className="text-3xl mb-8" style={{ color: 'rgb(39, 55, 77)' }}>
        AyushGPT
      </h1>
      <div className="flex flex-col md:flex-row gap-8" id="main">
        <div
          className="md:w-1/2 flex flex-col items-center justify-center shadow-lg rounded-lg p-8"
          style={{ backgroundColor: 'rgb(175, 211, 226)' }}
          id="image-generation"
        >
          <h1
            className="text-xl font-bold text-center mb-6"
            style={{ color: 'rgb(39, 55, 77)' }}
          >
            GENERATE IMAGES
          </h1>
          <div className="list mb-8">
            <ul className="flex flex-col items-center text-center gap-4">
              <li
                className="border-solid border-2 rounded-lg hover:shadow-xl px-6 py-4 w-full cursor-pointer"
                style={{
                  borderColor: 'rgb(25, 167, 206)',
                  backgroundColor: 'rgb(39, 55, 77)',
                  color: 'rgb(246, 241, 241)',
                }}
              >
                <p>"Serene sunset over mountains"</p>
              </li>

              <li
                className="border-solid border-2 rounded-lg hover:shadow-xl px-6 py-4 w-full cursor-pointer"
                style={{
                  borderColor: 'rgb(25, 167, 206)',
                  backgroundColor: 'rgb(39, 55, 77)',
                  color: 'rgb(246, 241, 241)',
                }}
              >
                <p>"Playful puppies in meadow."</p>
              </li>

              <li
                className="border-solid border-2 rounded-lg hover:shadow-xl px-6 py-4 w-full cursor-pointer"
                style={{
                  borderColor: 'rgb(25, 167, 206)',
                  backgroundColor: 'rgb(39, 55, 77)',
                  color: 'rgb(246, 241, 241)',
                }}
              >
                <p>"Vibrant city skyline at dusk."</p>
              </li>
            </ul>
          </div>
          <div className="mb-4">
            <input
              className="focus:outline-none border-transparent focus:shadow-outline-blue rounded-lg py-2 px-4 block appearance-none leading-normal w-full"
              type="text"
              placeholder="Enter prompt for image generation"
              style={{
                backgroundColor: 'rgb(246, 241, 241)',
                color: 'rgb(39, 55, 77)',
              }}
            />
          </div>
          <button
            className="font-bold py-2 px-4 rounded-full"
            style={{
              backgroundColor: 'rgb(25, 167, 206)',
              color: 'rgb(246, 241, 241)',
            }}
          >
            Generate Image
          </button>
        </div>
        <div
          className="md:w-1/2 flex flex-col items-center justify-center shadow-lg rounded-lg p-8"
          style={{ backgroundColor: 'rgb(175, 211, 226)' }}
          id="chat"
        >
          <h1
            className="text-xl font-bold text-center mb-6"
            style={{ color: 'rgb(39, 55, 77)' }}
          >
            ASK QUESTIONS
          </h1>
          <div className="list mb-8">
            <ul className="flex flex-col items-center text-center gap-4">
              <li
                className="border-solid border-2 rounded-lg hover:shadow-xl px-6 py-4 w-full cursor-pointer"
                style={{
                  borderColor: 'rgb(25, 167, 206)',
                  backgroundColor: 'rgb(39, 55, 77)',
                  color: 'rgb(246, 241, 241)',
                }}
                onClick={() => handleQuestionClick('Tell me a joke')}
              >
                <p>"Tell me a joke"</p>
              </li>

              <li
                className="border-solid border-2 rounded-lg hover:shadow-xl px-6 py-4 w-full cursor-pointer"
                style={{
                  borderColor: 'rgb(25, 167, 206)',
                  backgroundColor: 'rgb(39, 55, 77)',
                  color: 'rgb(246, 241, 241)',
                }}
                onClick={() => handleQuestionClick('What is the capital of France?')}
              >
                <p>"What is the capital of France?"</p>
              </li>

              <li
                className="border-solid border-2 rounded-lg hover:shadow-xl px-6 py-4 w-full cursor-pointer"
                style={{
                  borderColor: 'rgb(25, 167, 206)',
                  backgroundColor: 'rgb(39, 55, 77)',
                  color: 'rgb(246, 241, 241)',
                }}
                onClick={() => handleQuestionClick('Can you recommend a good book?')}
                
              >
                <p>"Can you recommend a good book?"</p>
              </li>
            </ul>
          </div>
          <InputForm
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            value={value}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
