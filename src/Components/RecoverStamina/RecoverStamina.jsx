import "./RecoverStamina.css";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const RecoverStamina = () => {
  return (
    <>
      <div className="overlay-modal"></div>
      <div className="modal">
        <FontAwesomeIcon icon={faPlus} />
        <h2 className="bit">Recover Stamina</h2>
        <input
          placeholder="Stamina amount to recover"
          className="bit"
          type="text"
        />
        <div className="modal-btn">
          <button className="cancel bit">cancel</button>
          <button className="create bit">recover</button>
        </div>
      </div>
    </>
  );
};

export default RecoverStamina;
