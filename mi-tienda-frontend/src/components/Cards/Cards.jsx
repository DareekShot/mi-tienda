import React from "react";
import "./Cards.css";

const Cards = () => {
  return (
    <div className="dashboard">
      <h2>Dashboard</h2>
      <div className="cards-container">
        <div className="card">
          <p>Órdenes</p>
          <span>68</span>
        </div>
        <div className="card">
          <p>Usuarios nuevos</p>
          <span>12</span>
        </div>
        <div className="card">
          <p>Ingresos totales</p>
          <span>S/2348.00</span>
        </div>
      </div>
    </div>
  );
};

export default Cards;