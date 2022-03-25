import "./RulesModal.scss";
import RulesImage from "../images/RulesImage.jsx";
import CloseIcon from "../images/CloseIcon.jsx";

function RulesPopup({ onCloseBtnClick }) {
  return (
    <span id="modalContainer" style={{height: document.body.clientHeight}}>
      <div id="modal">
        <h1>Rules</h1>
          <RulesImage />
        <button className="closeBtn" onClick={() => onCloseBtnClick(false)}>
          <CloseIcon />
        </button>
      </div>
    </span>
  );
};

export default RulesPopup;