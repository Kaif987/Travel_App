import React from "react";
import Navbar from "./Navbar";
import CardData from "./Data";
import Card from "./Card"

function App() {

  const cardComponents = CardData.map(item =>{
    return (
    <Card 
        id = {item.id}
        {...item}
    />
  )
  })


  return (
    <div className="App">
      <Navbar/>
      <div className="cards-div">
        {cardComponents}
      </div>
    </div>
  );
}

export default App;
