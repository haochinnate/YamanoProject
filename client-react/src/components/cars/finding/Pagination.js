import React from 'react'

const Pagination = (props) => {
    const { itemsPerPage, totalItems, paginate, activePage } = props;
    const pageNumbers = [];

    for (let index = 1; index <= Math.ceil(totalItems / itemsPerPage); index++) {
        pageNumbers.push(index);
    }
    // console.log("test");
    return (
        <nav aria-label="Page navigation example">
            <ul className="pagination justify-content-center">
                {pageNumbers.map(number => (
                    // className={`page-item ${activePage === number ? "active" : ""}`}
                    <li key={number} className={`page-item ${activePage === number ? "active" : ""}`}>
                        <a onClick={() => paginate(number)} 
                            className="page-link">
                            {number}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    )
}

export default Pagination
