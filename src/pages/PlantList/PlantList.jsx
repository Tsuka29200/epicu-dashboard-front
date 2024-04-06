import "./PlantList.css";
import { useEffect, useState } from "react";
import axios from "axios";
import PlantItem from "@components/PlantItem/PlantItem";
import { Link } from "react-router-dom";

export default function PlantList() {
  /* Ajouter ici les méthodes nécéssaires pour récupérer de la donnée du backend et la stocker dans le front */
  const [plants, setPlants] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/plants`)
      .then((res) => setPlants(res.data))
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/categories`)
      .then((res) => setCategories(res.data))
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div id="wj-shopping-list">
      <h1>Mes plantes Wild</h1>

      {/* Partie BONUS #2 */}
      <div className="filter">
        <select className="plantadd_input select" name="category" id="category">
          <option value="0">Tous les types de plantes</option>
          {categories.map((category) => (
            <option>{category.name}</option>
          ))}
        </select>
      </div>

      <div className="wj-plant-list">
        {plants.map((plant) => (
          <li key={plant.id}>
            <Link to={`/plants/${plant.id}`}>
              <PlantItem plant={plant} />
            </Link>
          </li>
        ))}
      </div>
    </div>
  );
}
