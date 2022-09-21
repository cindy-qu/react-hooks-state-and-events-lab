import React, { useState }  from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  const [isCount, setCount] = useState(false);

  function handleClick(){
    setCount((isCount) => !isCount)
  }
  const mode = isCount ? "App dark" : "App light" ;
  const buttonMode = isCount ? "Dark Mode" : "Light Mode"
  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
 

  return (
    <div className={mode}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleClick} >{buttonMode}</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
