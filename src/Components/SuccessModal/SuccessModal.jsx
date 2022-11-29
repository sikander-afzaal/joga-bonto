import "../CreateBox/CreateBox.css";
import "./SuccessModal.css";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SuccessModal = ({ title, msg, btnText }) => {
  return (
    <>
      <div className="overlay-modal"></div>
      <div className="modal">
        <FontAwesomeIcon icon={faPlus} />
        <h2 className="bit">{title}</h2>
        <p className="bit">{msg}</p>
        <button className="create bit">{btnText}</button>
      </div>
    </>
  );
};

export default SuccessModal;
