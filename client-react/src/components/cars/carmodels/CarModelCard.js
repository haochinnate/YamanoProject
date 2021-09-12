import React, {  useState, useEffect } from 'react'
import axios from 'axios';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { SERVERIP, CARMODELS_ROOT, CARS_DB_ROOT } from '../../../consts/url';
import { BODY_STYLES_ZH } from '../../../consts/bodyStyles';

const CarModelCard = (props) => {

    const { carmodel, manufacturer } = props;
    const [levelMinPrice, setLevelMinPrice] = useState(0);
    const [levelMaxPrice, setLevelMaxPrice] = useState(0);


    useEffect(() => {
        
        const fetchMinMaxPrice = async () => {
            const response = await axios.get(`http://${SERVERIP}:3001/carmodels/${carmodel.id}/trimlevels`);
            // console.log(response.data)

            const tmpMin = Math.min(...response.data.map(level => level.price));
            const tmpMax = Math.max(...response.data.map(level => level.price));
            // console.log(tmpMin)
            // console.log(tmpMax)
            setLevelMinPrice( Number.isFinite(tmpMin) ? tmpMin / 10000 : 0 );
            setLevelMaxPrice( Number.isFinite(tmpMax) ? tmpMax / 10000 : 0 );
        }
   
        fetchMinMaxPrice();

        // effect
        return () => {
            // cleanup
        }
    }, [])

    const renderAdmin = (carmodel) => {
        if (props.isAdminUser) {
            return (
                <div className="card-footer">
                    <div className="text-center">
                        <Link to={`${CARMODELS_ROOT}/edit/${carmodel.id}`} className="btn btn-primary m-1">
                            Edit
                        </Link>
                        <Link to={`${CARMODELS_ROOT}/delete/${carmodel.id}`} className="btn btn-danger m-1">
                            Delete
                        </Link>
                    </div>
                </div>
            );
        }
    }

    return (
        // 圖片
        // 名稱
        // 價格
        // 級距
        // 發布日期
        // 別稱
        <div className="col my-2" key={carmodel.id}>
            <div className="card" style={{width: '18rem'}}>
                <Link className="text-center" to={`${CARS_DB_ROOT}/${manufacturer.name}/${carmodel.name}`}>
                    {/* {carmodel.mainImage} */}
                    {/* <i className="fas fa-car"></i> */}
                    <img src={window.location.origin + '/images/icons/car.png'} 
                        alt={carmodel.name} className="card-img-top w-50"></img>
                </Link>
            
                <div className="card-body">
                    <h3 className="card-title fw-bold fs-3">{carmodel.name}</h3>
                    <h4 className="card-text text-danger fs-4">{levelMinPrice} 萬 ~ {levelMaxPrice} 萬</h4>
                    
                    {/* <div className="">
                        <a href={carmodel.officialUrl} target="_blank" rel="noreferrer noopener">官網</a>   
                        <span className="text-muted mx-2">別稱: {_.join(carmodel.alias, ',')}</span>
                    </div>
                    <h6 className="card-text"><small className="text-muted">發布日期: {carmodel.releaseDate}</small></h6> */}

                    <span className="badge bg-secondary me-2">{manufacturer.level}</span>

                    <span className="badge bg-primary me-2">{BODY_STYLES_ZH[carmodel.bodyStyle]}</span>

                    {/* <span className="badge bg-success me-2 ">Level 2</span> */}

                </div>

                {renderAdmin(carmodel)}
            </div>
        </div>

    )
}

const mapStateToProps = (state) => {
    return { 
        isAdminUser: state.auth.isAdminUser
    }
};

export default connect(mapStateToProps)(CarModelCard)
