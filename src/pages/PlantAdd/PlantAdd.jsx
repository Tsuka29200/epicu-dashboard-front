import { useEffect, useState } from "react";
import "./PlantAdd.css";

// Partie BONUS #1
export default function PlantAdd() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_BACKEND_URL}/categories`)
      .then((res) => res.json())
      .then((data) => setCategories(data));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Code de gestion de l'envoi du formulaire en POST
  };

  return (
    <div id="plantadd">
      <h1 className="plantadd_title">Ajouter une plante</h1>

      <form className="plantadd_form" onSubmit={handleSubmit}>
        <label className="plantadd_label" htmlFor="name">
          Nom de la plante
          <input className="plantadd_input" id="name" name="name" type="text" />
        </label>

        <label className="plantadd_label" htmlFor="category">
          Catégorie
          <select className="plantadd_input" name="category_id" id="category">
            <option value="0">Choisir une catégorie... </option>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </label>

        <label className="plantadd_label" htmlFor="water">
          Besoin d'arrosage
          <input
            className="plantadd_input"
            id="water"
            name="water"
            type="number"
          />
        </label>

        <label className="plantadd_label" htmlFor="sun">
          Besoin d'ensoleillement
          <input className="plantadd_input" id="sun" name="sun" type="number" />
        </label>

        <label className="plantadd_label" htmlFor="price">
          Prix
          <input
            className="plantadd_input"
            id="price"
            name="price"
            type="number"
          />
        </label>

        <label className="plantadd_label" htmlFor="image">
          Image
          <input
            className="plantadd_input"
            id="image"
            name="image"
            type="text"
          />
        </label>

        <button className="button" type="submit">
          Ajouter la plante
        </button>
      </form>
    </div>
  );
}
