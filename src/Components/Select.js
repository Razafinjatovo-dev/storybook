import React from "react";
import shopList from "../Assets/shopList.json";

const Select = (props) => {
  const { setSelectedShop, setDisplayAdress, setShopToDisplay } = props;

  const handleSelect = (event) => {
    setSelectedShop(event.target.value);
    setDisplayAdress(false);
    //rechercher les infos sur le magasin choisi
    const selectedShopData = shopList.items.filter((shop) => {
      return shop.shopInfos.name === event.target.value;
    });
    setShopToDisplay(selectedShopData[0]);
  };

  return (
    <div className='SelectWrapper'>
      <select defaultValue="noValue" onChange={handleSelect}>
        <option disabled value="noValue">
          Sélectionnez votre magasin
        </option>
        {shopList.items.map((shop) => {
          return <option key={shop.shopInfos.id}>{shop.shopInfos.name}</option>;
        })}
      </select>
    </div>
  );
};

export default Select;
