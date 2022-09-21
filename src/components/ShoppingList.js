import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  
  const [filterBy, setFilterBy] = useState("All");
 

  function handleFilterChange(event) {
    setFilterBy(event.target.value);
    // console.log(event.target.value)
  }

  const categoriesToDisplay = items.filter((cat) => {
    if (filterBy === "All") {
      return true;
    } else {
      return cat.category === filterBy;
    }
    
  });
  // console.log(categoriesToDisplay)
  const newList = categoriesToDisplay.map((cat) => (
    <Item key={cat.id} name={cat.name} category={cat.category} />
  ))

 
  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleFilterChange}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {/* {items.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))} */}
        {newList}
      </ul>
    </div>
  );
}

export default ShoppingList;
