import React from "react";

const ShopDetails = (props) => {
  const { selectedShop, displayAdress, shopToDisplay } = props;

  return (
    <div
      className="ShopDetailsWrapper"
      style={
        selectedShop && displayAdress
          ? { display: "initial" }
          : { display: "none" }
      }
    >
      <h3>Adresse du magasin</h3>
      {shopToDisplay && (
        <div>
          <h4>{shopToDisplay.shopInfos.name}</h4>
          <p>{shopToDisplay.shopInfos.address.streetAddress}</p>
          <p>
            {shopToDisplay.shopInfos.address.zipCode}{" "}
            {shopToDisplay.shopInfos.address.city}
          </p>
        </div>
      )}
    </div>
  );
};

export default ShopDetails;
