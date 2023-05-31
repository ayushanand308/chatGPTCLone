import ImageInput from "./imageInput";

const ImageGeneration = ({ generatedImages, handlesubmit1, value1, setValue1, prompt, setPrompt }) => {
  return (
    <div>
      {/* Display the prompt and generated images */}
      <div className="mt-8">
        {prompt.map((p, index) => (
          <div key={index} className="m-8">
            <p cla>{p}</p>
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
