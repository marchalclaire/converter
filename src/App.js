import React, { useState } from "react";
import "./App.css";
// 1. Faire la mise en page (html / css)
// 2. Créer les états
// 3. Mettre en place les interactions (onClick, etc.)
const App = () => {
  const [currency1, setCurrency1] = useState("");
  const [currency2, setCurrency2] = useState("");
  const [currentTarget, setCurrentTarget] = useState("");
  let rate1 = 1.139283;
  let rate2 = 0.860717;

  const handleSubmit = event => {
    event.preventDefault(); // Pour empêcher le navigateur de changer de page lors de la soumission du formulaire
    //alert(currentTarget);
    if (currentTarget === "button1") {
      setCurrency2(currency1 * rate1);
    } else {
      setCurrency1(currency2 * rate2);
    }
  };

  return (
    <div className="container">
      <label className="title">Converter</label>
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <div className="input+logo">
            <input
              placeholder="0"
              type="text"
              value={currency1}
              onChange={event => {
                setCurrency1(event.target.value);
              }}
            />
            <span className="logo">€</span>
          </div>
          <button
            name="button1"
            onClick={event => {
              setCurrentTarget(event.target.name);
            }}
            type="submit"
          >
            {"-> € to $"}
          </button>
          <button
            name="button2"
            onClick={event => {
              setCurrentTarget(event.target.name);
            }}
            type="submit"
          >
            {"<- $ to €"}
          </button>
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
