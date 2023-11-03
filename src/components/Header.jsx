import React from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";

const Header = () => {
  const store = useSelector((store) => store);

  return (
    <header>
      <div>
        <img src="/logo-f.png"/>
        <h2>Uçuş Radarı</h2>
      </div>

      <h4>
        {store.isLoading ? "Uçuşlar Hesaplanıyor" : `${store.flights.length} uçuş bulundu`}
      </h4>
    </header>
  );
};

export default Header;
