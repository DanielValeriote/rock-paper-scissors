import "./Option.scss";

const Option = ({image, name, color, id}) => {
  return (
    <div
      className={`option ${name}`}
      key={id}
      style={{ border: `10px solid ${color}` }}
    >
      <div className={`option-image`}>
        <img src={image} alt={name} />
      </div>
    </div>
  );
}

export default Option