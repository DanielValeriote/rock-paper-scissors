import "./Option.scss";

const Option = ({id, onClickFunction, extraClassName, data}) => {
  return (
    <div
      className={`option ${data.name} ${extraClassName && extraClassName}`}
      key={id}
      style={{ border: `10px solid ${data.color}` }}
      onClick={() => onClickFunction && onClickFunction(data)}
    >
      <div className={`option-image`}>
        <img src={data.img} alt={data.name} />
      </div>
    </div>
  );
}

export default Option