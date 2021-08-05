import React from 'react'
import { Link } from 'react-router-dom'
import GoogleAuth from './GoogleAuth'

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link to="/" className="navbar-brand">
                    Yamano
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to="/cars" className="nav-link" aria-current="page">
                                DB
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/" className="nav-link">
                                Find Cars
                            </Link>
                        </li>

                        {/* <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Dropdown
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a className="dropdown-item" href="#">Action</a></li>
                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                <li><hr className="dropdown-divider"/></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li> */}
                        
                    </ul>

                    <form className="d-flex">
                        <GoogleAuth />
                    </form>
                    {/* Search area */}
                    {/* <form className="d-flex" style={{visibility: 'hidden'}}>
                        
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form> */}

                </div>
            </div>
        </nav>

        // <div className="ui secondary pointing menu">
        //     <Link to="/" className="item">
        //         Yamano
        //     </Link>
        //     <div className="right menu">
        //         <Link to="/cars" className="item">
        //             DB
        //         </Link>
        //         <Link to="/" className="item">
        //             Find Cars
        //         </Link>
        //         <GoogleAuth />
        //     </div>
        // </div> 
    );
};

export default Header;
