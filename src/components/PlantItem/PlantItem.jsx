/* eslint-disable react/prop-types */
import "./PlantItem.css";
import Care from "../Care/Care";

function PlantItem({ plant }) {
  const { name, water, light, price, image, category } = plant;

  return (
    <div className="wj-plant-item">
      <span className="wj-plant-item-price">{price}€</span>
      <img className="wj-plant-item-cover" src={image} alt={`${name} cover`} />
      <div className="legende">
        <div className="infos">
          <div className="name">{name}</div>
          <div className="category">{category}</div>
        </div>
        <div className="care">
          <Care type="water" amount={water} />
          <Care type="sun" amount={light} />
        </div>
      </div>
    </div>
  );
}

export default PlantItem;
