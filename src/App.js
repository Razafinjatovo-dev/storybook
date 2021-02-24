import { useState } from "react";
import Top from "./Components/Top";
import Select from "./Components/Select";
import Button from "./Components/Button";
import ShopDetails from "./Components/ShopDetails";
import "./App.css";

function App() {
  const [selectedShop, setSelectedShop] = useState("");
  const [displayAdress, setDisplayAdress] = useState(false);
  const [shopToDisplay, setShopToDisplay] = useState();

  return (
    <div className="App">
      <div className='FormWrapper'>
        <Top />
        <Select
          setSelectedShop={setSelectedShop}
          setDisplayAdress={setDisplayAdress}
          setShopToDisplay={setShopToDisplay}
        />
        <ShopDetails
          selectedShop={selectedShop}
          displayAdress={displayAdress}
          shopToDisplay={shopToDisplay}
        />

        <Button
          displayAdress={displayAdress}
          setDisplayAdress={setDisplayAdress}
          selectedShop={selectedShop}
        />
      </div>
    </div>
  );
}

export default App;
