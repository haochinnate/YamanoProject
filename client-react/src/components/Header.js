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
                                找車
                            </Link>
                        </li>

                        <li className="nav-item">
                            <a class="nav-link disabled" href="#" tabindex="-1">養車成本計算</a>
                            {/* <Link to="/costs" className="nav-link">
                                養車成本計算
                            </Link> */}
                        </li>
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
    );
};

export default Header;
