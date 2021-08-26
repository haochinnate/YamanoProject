import { findIndex } from 'lodash';
import React from 'react'

const Pagination = (props) => {
    const { itemsPerPage, totalItems, paginate } = props;
    const pageNumbers = [];

    for (let index = 1; index <= Math.ceil(totalItems / itemsPerPage); index++) {
        pageNumbers.push(index);
    }

    return (
        <nav aria-label="Page navigation example">
            <ul className="pagination justify-content-center">
                {pageNumbers.map(number => (
                    <li key={number} className="page-item">
                        <a onClick={() => paginate(number)} 
                            className="page-link" href="#">
                            {number}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
                // {/* <li className="page-item">
                //             <a className="page-link" href="#" aria-label="Previous">
                //                 <span aria-hidden="true">&laquo;</span>
                //             </a>
                //         </li>
                //         <li className="page-item"><a className="page-link" href="#">1</a></li>
                //         <li className="page-item"><a className="page-link" href="#">2</a></li>
                //         <li className="page-item"><a className="page-link" href="#">3</a></li>
                //         <li className="page-item">
                //             <a className="page-link" href="#" aria-label="Next">
                //                 <span aria-hidden="true">&raquo;</span>
                //             </a>
                //         </li>
                //     </ul>  */}
    )
}

export default Pagination
