import "./CreateBox.css";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CreateBox = () => {
  return (
    <>
      <div className="overlay-modal"></div>
      <div className="modal">
        <FontAwesomeIcon icon={faPlus} />
        <h2 className="bit">Create NFT</h2>
        <input
          placeholder="Players Count to create"
          className="bit"
          type="text"
        />
        <div className="modal-btn">
          <button className="cancel bit">cancel</button>
          <button className="create bit">create</button>
        </div>
      </div>
    </>
  );
};

export default CreateBox;
