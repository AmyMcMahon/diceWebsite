import  { useState } from "react";
import SearchModal from "./searchModel";
import { FaSearch } from "react-icons/fa";

const SearchIcon = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSearchIconClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <FaSearch color="#4D2585" onClick={handleSearchIconClick} />
      <SearchModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
};

export default SearchIcon;