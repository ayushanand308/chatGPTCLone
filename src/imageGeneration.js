import ImageInput2 from "./imageInput2";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { PropagateLoader } from 'react-spinners';
import { faFloppyDisk } from "@fortawesome/free-solid-svg-icons";

const ImageGeneration = ({ generatedImages, handlesubmit1, value1, setValue1, prompt, isLoading }) => {
  const navigate = useNavigate();

  return (
    <div className="">
      <button className="bg-blue-300 sticky w-full top-0 max" onClick={() => navigate("/")}>
        <FontAwesomeIcon icon={faHouse} />
      </button>
      <div className="mt-8">
        {prompt.map((p, index) => (
          <div key={index} className="m-8 flex-row sm:flex-row items-center justify-center">
            <p className="text-center bg-blue-500 rounded-lg p-2">{p}</p>
            <div className="flex justify-center gap-2 bg-blue-300 rounded-lg px-4 py-4 mt-4 max-w-">
              {generatedImages[index]?.map((image, imageIndex) => (
                <img
                  key={imageIndex}
                  className="w-1/2 rounded-lg"
                  src={image.url}
                  alt={`Generated Image ${index + 1}`}
                />
              ))}

            </div>
          </div>
        ))}
      </div>
      <div className="relative">
        {isLoading && (
          <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2">
            <PropagateLoader color="#36d7b7" size={10} speedMultiplier={1} style={{position:"fixed",bottom:"90px"}} />
          </div>
        )}
        <ImageInput2 handlesubmit1={handlesubmit1} value1={value1} setValue1={setValue1} />
      </div>
    </div>
  );
};

export default ImageGeneration;
