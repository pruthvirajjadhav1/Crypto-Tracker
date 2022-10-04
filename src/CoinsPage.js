import React from "react";
import Coin from './Coin';
import PropTypes from 'prop-types'

const CoinsPage = (props) => {
    const { coins } = props;

    return (
        <div>
            {coins.map(coin => {
                return (
                    <Coin
                        key={coin.id}
                        name={coin.name}
                        price={coin.current_price}
                        symbol={coin.symbol}
                        marketcap={coin.total_volume}
                        volume={coin.market_cap}
                        image={coin.image}
                        priceChange={coin.price_change_percentage_24h}
                    />
                );
            })}
        </div>
    )
}

CoinsPage.propTypes = {
    coins: PropTypes.object
};

export default CoinsPage;