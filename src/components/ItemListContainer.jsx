/* import React from "react";

const ItemListContainer = ({ greeting }) => {
  return (
    <div style={{ padding: "20px", textAlign: "center", border: "1px solid #ddd", borderRadius: "10px" }}>
      <h2>{greeting}</h2>
    </div>
  );
};

export default ItemListContainer; */


const ItemListContainer = ({ greeting }) => {
    return (
        <div className="greeting">
            {greeting}
        </div>
    );
}

export default ItemListContainer;