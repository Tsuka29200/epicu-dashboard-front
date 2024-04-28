import React, { useState } from "react";
import "./Banner.css";
import { Link } from "react-router-dom";
import logoepicu from "../../images/logoepicu.png";

function Banner() {
  const [selectedItem, setSelectedItem] = useState(0);

  const handleItemClick = (index) => {
    setSelectedItem(index);
  };

  return (
    <div className="wj-banner">
      <nav>
        <ul>
          <li className={selectedItem === 0 ? "selected" : ""}>
            <Link to="/" onClick={() => handleItemClick(0)}>
              Dashboard
            </Link>
          </li>
          <li className={selectedItem === 1 ? "selected" : ""}>
            <Link to="/prospection" onClick={() => handleItemClick(1)}>
              Prospection
            </Link>
          </li>
          <li className={selectedItem === 2 ? "selected" : ""}>
            <Link to="/clients" onClick={() => handleItemClick(2)}>
              Clients
            </Link>
          </li>
          <li className={selectedItem === 3 ? "selected" : ""}>
            <Link to="/comptabilite" onClick={() => handleItemClick(3)}>
              Comptabilité
            </Link>
          </li>
          <li className={selectedItem === 4 ? "selected" : ""}>
            <Link to="/documents" onClick={() => handleItemClick(4)}>
              Documents
            </Link>
          </li>
        </ul>
      </nav>
      <Link className="wj-logo" to="/">
        <img src={logoepicu} alt="epicu-logo" />
      </Link>
    </div>
  );
}

export default Banner;
