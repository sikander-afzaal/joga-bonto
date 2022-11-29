import "../CreateBox/CreateBox.css";
import "./DifficultyModal.css";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const DifficultyModal = () => {
  return (
    <>
      <div className="overlay-modal"></div>
      <div className="modal diff-modal">
        {" "}
        <FontAwesomeIcon icon={faPlus} />
        <button className="diff-btn bit">Easy</button>
        <button className="diff-btn bit">Medium</button>
        <button className="diff-btn bit">Hard</button>
      </div>
    </>
  );
};

export default DifficultyModal;
