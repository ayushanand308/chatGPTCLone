import { faClone, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const InputForm = ({ handleChange, handleSubmit, value,style }) => {
    return (
      <form
        className="fixed bottom-0 left-4 right-4 mb-4 p-2 rounded-lg"
        onSubmit={handleSubmit}
        style={style}
      >
        <div className="flex items-center">
          <input
            id="message-input"
            value={value}
            onChange={handleChange}
            className="focus:outline-none border-transparent focus:shadow-outline-blue rounded-lg py-2 px-4 mr-3 flex-1"
            type="text"
            placeholder="Ask a question"
            style={{ backgroundColor: 'transparent', color: 'rgb(145, 127, 178)', fontSize: '1.2rem' }}
          />
          <button
            className="font-bold py-2 px-4 rounded-md bg-gray-500 hover:bg-blue-600 text-white"
            type="submit"
          >
            <FontAwesomeIcon icon={faPaperPlane} />

          </button>
        </div>
      </form>
    );
  };

  export default InputForm;