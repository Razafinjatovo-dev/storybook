import React from "react";

const Button = (props) => {
  const { displayAdress, setDisplayAdress, selectedShop } = props;

  const handleClick = (event) => {
    setDisplayAdress(true);
  };

  return (
    <div className="ButtonWrapper">
      <button
        onClick={handleClick}
        style={
          selectedShop
            ? { disabled: false, backgroundColor: " #1abc9c", color: "white" }
            : { disabled: true, backgroundColor: "#bdc3c7", color: "white" }
        }
      >
        {" "}
        JE VALIDE{" "}
      </button>
    </div>
  );
};
export default Button;
