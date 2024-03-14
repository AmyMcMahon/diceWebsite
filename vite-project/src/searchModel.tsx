import React, { useState } from "react";
import List from "./Components/list";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const SearchModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const [inputText, setInputText] = useState(""); // State declaration within the component

  const inputHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    //convert input text to lower case
    const lowerCase = e.target.value.toLowerCase();
    setInputText(lowerCase);
  };

  return (
    <>
      {isOpen && (
        <dialog open>
          <article>
            <h2>Search</h2>
            <form>
              <input
                type="search"
                name="search"
                placeholder="Search"
                aria-label="Search"
                onChange={inputHandler}
              />
            </form>
            <List input={inputText} />
            <footer>
              <form>
                <button type="button" onClick={onClose} style={{backgroundColor:"#4D2585", color:"white"}}>
                  Done
                </button>
              </form>
            </footer>
          </article>
        </dialog>
      )}
    </>
  );
};

export default SearchModal;


