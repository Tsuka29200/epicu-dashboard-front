/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
import "./Care.css";

function Care({ type, amount }) {
  return (
    <>
      {[...Array(amount)].map((item, index) => (
        <img
          key={`${type}-${index}`}
          src={`/src/assets/${type}.svg`}
          alt={type}
        />
      ))}
    </>
  );
}

export default Care;
