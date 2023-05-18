import React, { useState, useEffect } from "react";
import axios from "axios";
import CoinsPage from "./components/pages/CoinsPage";
import Pagination from "./components/Pagination/Pagination";
import CoinLabel from "./components/Coin/CoinLabel";
import Title from './components/global/Title';
import "./App.css";
import "./components/Coin/Coin.css";

function App() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const coinsPerPage = 5;

  useEffect(() => {
    axios
      .get(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'
      )
      .then((res) => {
        setCoins(res.data);
        console.log(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredCoins = coins.filter(
    (coin) =>
      coin.name.toLowerCase().includes(search.toLowerCase()) ||
      coin.symbol.toLowerCase().includes(search.toLowerCase())
  );

  const indexOfLastCoin = currentPage * coinsPerPage;
  const indexOfFirstCoin = indexOfLastCoin - coinsPerPage;
  const currentCoins = filteredCoins.slice(indexOfFirstCoin, indexOfLastCoin);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="coin-app">
      <div className="coin-search">
        <Title text="Crypto Tracker" className="coin-text" />
        <form>
          <input
            className="coin-input"
            type="text"
            onChange={handleChange}
            placeholder="Search"
          />
        </form>
      </div>
      <div className="coin-header-container">
        <div className="coin-header-row">
          <div className="coin-header-label">
            <CoinLabel text="Coint"/>
            <CoinLabel text="Symbol"/>
            <CoinLabel text="Price"/>
            <CoinLabel text="Market Cap"/>
            <CoinLabel text="24h change"/>
            <CoinLabel text="24h Volume"/>
          </div>
        </div>
      </div>
      <CoinsPage coins={currentCoins} />
      <Pagination
        coinsPerPage={coinsPerPage}
        totalCoins={filteredCoins.length}
        paginate={paginate}
      />
    </div>
  );
}

export default App;
