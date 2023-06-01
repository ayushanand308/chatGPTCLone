import ImageInput from "./imageInput";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faHouse } from "@fortawesome/free-solid-svg-icons";


const ImageGeneration = ({ generatedImages, handlesubmit1, value1, setValue1, prompt, setPrompt }) => {
    const navigate = useNavigate();

  return (
    <div>
        <button className="bg-[rgb(25,167,206)] sticky top-0 w-full" onClick={() => navigate("/")}>
            <FontAwesomeIcon icon={faHouse} />
        </button>
      {/* Display the prompt and generated images */}
      <div className="mt-8">
        {prompt.map((p, index) => (
          <div key={index} className="m-8">
            <p>{p}</p>
            <div className="flex justify-center gap-4 bg-[rgb(230,232,232)] rounded-lg px-4 py-8 mt-4">
              {generatedImages[index]?.map((image, imageIndex) => (
                <img
                  key={imageIndex}
                  className="w-64 h-64 object-cover rounded"
                  src={image.url}
                  alt={`Generated Image ${index + 1}`}
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Image input form */}
      <ImageInput handlesubmit1={handlesubmit1} value1={value1} setValue1={setValue1} />
    </div>
  );
};

export default ImageGeneration;
