import React, { useState } from "react";
import "./App.css";

// 1. Faire la mise en page (html / css)
// 2. Créer les états
// 3. Mettre en place les interactions (onClick, etc.)

const App = () => {
  const [currency1, setCurrency1] = useState("");
  const [currency2, setCurrency2] = useState("");
  let rates = 1.139283;

  const handleSubmit = event => {
    event.preventDefault();
    setCurrency2(currency1 * rates);

    // Pour empêcher le navigateur de changer de page lors de la soumission du formulaire
  };

  return (
    <div className="container">
      <label className="title">EUR to USD</label>
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <div className="input+logo">
            <input
              placeholder="0"
              type="text"
              name="Currency1"
              value={currency1}
              onChange={event => {
                setCurrency1(event.target.value);
              }}
            />
            <span className="logo">€</span>
          </div>
          <button type="submit">{"->"}</button>
          <div className="input+logo">
            <input
              placeholder="0"
              type="text"
              name="Currency2"
              value={currency2}
              onChange={event => {
                setCurrency2(event.target.value);
              }}
            />
            <span className="logo">$</span>
          </div>
        </div>
      </form>
    </div>
  );
};

export default App;
