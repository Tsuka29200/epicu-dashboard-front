import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Care from "../../components/Care/Care";
import "./PlantDetail.css";

export default function PlantDetail() {
  const [plant, setPlant] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetch(`${process.env.REACT_APP_BACKEND_URL}/plants/${id}`)
      .then((response) => response.json())
      .then((data) => setPlant(data));
  }, [id]);

  return (
    <div id="wj-plant-detail">
      <div className="image half">
        <img src={plant.image} alt={`${plant.name}`} />
      </div>

      <div className="detail half">
        <h1>{plant.name}</h1>

        <div className="data">
          <div className="category">Category : {plant.category}</div>

          <div className="light">
            Besoin en lumière : <Care type="sun" amount={plant.light} />
          </div>

          <div className="water">
            Besoin en eau : <Care type="water" amount={plant.water} />
          </div>

          <div className="price">Prix: {plant.price}€</div>
        </div>

        <div className="center">
          <button className="buy" type="button">
            Ajouter au panier
          </button>
        </div>
      </div>
    </div>
  );
}
