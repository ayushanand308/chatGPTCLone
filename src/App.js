import './App.css';
import Home from './home';
import Chats from './chats';
import { Route, Routes,useNavigate, json } from 'react-router-dom';
import InputForm from './inputForm';
import { PropagateLoader } from 'react-spinners';
import ImageGeneration from './imageGeneration';


import { useState } from 'react';
function App() {
  const navigate=useNavigate();
  const [isLoading, setIsLoading] = useState(false);


  const generateOutput = async () => {
    setIsLoading(true);
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

setIsLoading(false);
    
};






  const handleChange = (e) => {
    setValue(e.target.value);
};


const handleSubmit = async (e) => {

  e.preventDefault();
try {
  await generateOutput();
  setQuestion([...question,value]);
  const timestamp = new Date().toLocaleTimeString('en-US', {hour: 'numeric', minute: 'numeric'});
  SetTime([...time, timestamp]);
  setValue("");
  navigate('/chats');
  } catch (error) {
  console.error('Error', error);
  }
  

};

const [value, setValue] = useState("");


  const [question, setQuestion] = useState([]);
  const [output, SetOutput] = useState([]);
  const [time,SetTime]=useState([]);
  const [chatHistory,setChatHistory]=useState([]);











  const [value1,setValue1]=useState("");
  const [prompt,setPrompt]=useState([]);
  const [generatedImages, setGeneratedImages] = useState([]);

  const generateOutput1 = async () => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        prompt: value1,
        n: 4
      })
    };

    try{
      const response = await fetch("http://localhost:8000/generations", options);
      const data = await response.json();
      setGeneratedImages([...generatedImages,data.data]);
    }catch(error){
      console.error('Error', error);
    }
  };

  const handlesubmit1=async (e)=>{
    e.preventDefault();
    try{
      await generateOutput1();
      setPrompt([...prompt,value1]);
      setValue1("");
      navigate('/generations');
    }catch(error){
      console.error('Error', error);
    }
  };
  
  return (
    <div className='App'>


<Routes>
  <Route path='/' element={<Home question={question} setQuestion={setQuestion} output={output} SetOutput={SetOutput} time={time} 
  SetTime={SetTime} 
  value={value}
  setValue={setValue}
  handleChange={handleChange}
  handleSubmit={handleSubmit}
  value1={value1}
  setValue1={setValue1}
  generatedImages={generatedImages}
  setGeneratedImages={setGeneratedImages}
  handlesubmit1={handlesubmit1}
  />} />
  <Route path='/chats' element={<Chats setQuestion={setQuestion} question={question} SetTime={SetTime} SetOutput={SetOutput} output={output} time={time} 
  value={value}
  handleChange={handleChange}
  handleSubmit={handleSubmit}
  chatHistory={chatHistory}
  setChatHistory={setChatHistory} />} />

  <Route path='/generations' element={<ImageGeneration value1={value1} setValue1={setValue1} generatedImages={generatedImages} setGeneratedImages={setGeneratedImages} handlesubmit1={handlesubmit1}
  prompt={prompt}
  setPrompt={setPrompt} />} />


  
</Routes>
    {(isLoading &&
  <PropagateLoader color="#36d7b7" size={10} speedMultiplier={1} style={{position:"absolute",bottom:"90px"}}/>
)}

    </div>
  );
}

export default App;
