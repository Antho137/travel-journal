import React from "react";
import './App.css';
import Header from "./components/Header";
import Card from "./components/Card";
import { dataTravel } from "./components/data";

const App = () => {
  const cards = dataTravel.map(item => {
    return (
      <Card
        key={item.title}
        item={item} 
      />
    )
  })

  return (
    <div className="App">
      <Header />
      <div className="container">
        {cards}        
      </div>
    </div>
  );
};

export default App
