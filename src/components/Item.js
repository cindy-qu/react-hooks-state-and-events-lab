import React, { useState } from "react";

function Item({ name, category }) {

  const [isItem, setItem] = useState(true);
    
  function handleItem(){
    setItem((isItem) => !isItem)
  }

  const itemMode = isItem ? "" : "in-cart" ;
  const cartMode = isItem ? "Add to Cart" : "Remove From Cart" ;
  const cartClass = isItem ? "add" : "remove" ;

  return (
    <li className={itemMode}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={cartClass} onClick={handleItem}>{cartMode}</button>
    </li>
  );
}

export default Item;
