import React from 'react';
import { useNavigate } from 'react-router-dom';
import InputForm2 from './inputForm2';
import ImageInput from './imageInput';

const Home = ({
  value,
  setValue,
  handleChange,
  handleSubmit,
  value1,
  setValue1,
  handlesubmit1
}) => {
  const navigate = useNavigate();
  const handleQuestionClick = (question) => {
    setValue(question);
    navigate('/chats');
  };

  const handleQuestionClick2 = (question) => {
    setValue1(question);
    navigate('/generations');
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-4 bg-gray-100">
      <h1 className="text-4xl font-bold mb-8 text-gray-800">AyushGPT</h1>
      <div className="flex flex-col md:flex-row gap-8" id="main">
        <div className="w-full md:w-1/2 flex flex-col items-center justify-center shadow-lg rounded-lg p-8 bg-blue-300" id="image-generation">
          <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">GENERATE IMAGES</h1>
          <div className="list mb-8">
            <ul className="flex flex-col items-center text-center gap-4">
              {['Serene sunset over mountains', 'Playful puppies in meadow', 'Vibrant city skyline at dusk'].map((text) => (
                <li
                  key={text}
                  onClick={() => handleQuestionClick2(text)}
                  className="border-solid border-2 rounded-lg hover:shadow-xl px-6 py-4 w-full cursor-pointer transition-all duration-200 ease-in-out bg-gray-800 text-white hover:bg-blue-500 hover:border-blue-500"
                >
                  <p>{`"${text}"`}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="mb-4">
            <ImageInput handlesubmit1={handlesubmit1} value1={value1} setValue1={setValue1} />
          </div>
        </div>
        <div className="w-full md:w-1/2 flex flex-col items-center justify-center shadow-lg rounded-lg p-8 bg-blue-300" id="chat">
          <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">ASK QUESTIONS</h1>
          <div className="list mb-8">
            <ul className="flex flex-col items-center text-center gap-4">
              {['Tell me a joke', 'What is the capital of France?', 'Can you recommend a good book?'].map((text) => (
                <li
                  key={text}
                  className="border-solid border-2 rounded-lg hover:shadow-xl px-6 py-4 w-full cursor-pointer transition-all duration-200 ease-in-out bg-gray-800 text-white hover:bg-blue-500 hover:border-blue-500"
                  onClick={() => handleQuestionClick(text)}
                >
                  <p>{`"${text}"`}</p>
                </li>
              ))}
            </ul>
            <InputForm2 handleChange={handleChange} handleSubmit={handleSubmit} value={value} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
