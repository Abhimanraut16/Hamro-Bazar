import React, { useLayoutEffect } from 'react'

function Pagination({ productsPerPage, totalproducts, paginate, activePage }) {
    const pageNumer = [];
    for (let i = 1; i <= Math.ceil(totalproducts / productsPerPage); i++) {
        pageNumer.push(i)
    }

    return (
        <ul className='default-pagination lab-ul'>

            <li>
                <a href="#" onClick={() => {
                    if (activePage < pageNumer.length) {
                        paginate(activePage - 1)
                    }
                }} >
                    <i class="icofont-rounded-left"></i>
                </a>
            </li>
            {
                pageNumer.map((number) => (
                    <li key={number} className={`page-item ${number === activePage ? "bg-warning" : ""}`}>
                        <button onClick={() => paginate(number)} className='bg-transparent'>{number}</button>

                    </li>
                ))
            }
            <li>
                <a href="#" onClick={() => {
                    if (activePage < pageNumer.length) {
                        paginate(activePage + 1)
                    }
                }} >
                    <i class="icofont-rounded-right"></i>
                </a>
            </li>
        </ul>

    )
}

export default Pagination