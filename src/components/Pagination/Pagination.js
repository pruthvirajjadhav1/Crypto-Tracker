import React from 'react';
import PropTypes from 'prop-types'


const Pagination = ({ coinsPerPage, totalCoins, paginate }) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(totalCoins / coinsPerPage); i++) {
        pageNumbers.push(i);
    }

    return (
        <nav className='mt-5' >
            <ul className='pagination'>
                {pageNumbers.map(number => (
                    <li key={number} className='page-item'>
                        <a onClick={() => paginate(number)} href='!#' className='page-link'>
                            {number}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
};

Pagination.propTypes = {
    coinsPerPage: PropTypes.number,
    totalCoins: PropTypes.number,
    paginate: PropTypes.func
};

export default Pagination;