import "./Option.scss";
import HighlightOption from "./HighlightOption.js";

const Option = ({ id, onClickFunction, extraClassName, data, highlighted }) => {
  return (
    <div
      className={`option ${data.name} ${extraClassName && extraClassName}`}
      key={id}
      highlighted={highlighted || false}
      style={{ border: `10px solid ${data.color}` }}
      onClick={() => onClickFunction && onClickFunction(data)}
    >
        {highlighted && <HighlightOption />}
      <div className={`option-image`}>
        <img src={data.img} alt={data.name} />
      </div>
    </div>
  );
};

export default Option