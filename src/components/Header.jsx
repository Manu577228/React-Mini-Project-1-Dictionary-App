import { useState, useContext } from "react";
import { InputContext } from "../App";

function Header() {
  const [value, setValue] = useState("");
  const { inputValue, setInputValue } = useContext(InputContext);

  const handleInputChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = () => {
    setInputValue(value);
    setValue("");
  };

  const handleInputKeyDown = (e) => {
    if (e.key === "Enter") {
      setInputValue(value);
      setValue("");
    }
  };

  return (
    <div className="bg-gray-700">
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold text-center text-white">
          My Dictionary
        </h1>
        <p className="text-center mt-1 mb-6 text-slate-300 text-lg">
          Find definitions for word
        </p>

        <div className="flex flex-col items-center justify-center mt-5">
          <div className="flex flex-col md:flex-row items-center border-2 border-gray-200 rounded">
            <input
              className="px-4 py-2 md:w-80 mb-2 md:mb-0"
              type="text"
              placeholder="Search..."
              onChange={handleInputChange}
              onKeyDown={handleInputKeyDown}
              value={value}
            />
            <button
              className="bg-blue-400 md:border-l px-4 py-2 text-white"
              onClick={handleSubmit}
            >
              Search
            </button>
          </div>

          {inputValue && (
            <h3 className="text-gray-50 text-center mt-4 md:ml-12">
              Result for :
              <span className="text-white font-bold ml-2 md:ml-4">{inputValue}</span>
            </h3>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
              
