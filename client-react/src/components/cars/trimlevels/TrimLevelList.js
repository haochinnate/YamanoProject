import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { TRIMLEVELS_ROOT } from '../../../consts/url';
import { BODY_STYLES_ZH } from '../../../consts/bodyStyles';
import { POWER_TYPES_ZH } from '../../../consts/powerTypes';
import { fetchTrimLevelsByCarmodel } from '../../../actions';



class TrimLevelList extends React.Component {
    
    componentDidMount() {
        // console.log('TrimLevelList componentDidMount');

        if (this.props.carmodel) {
            console.log('TrimLevelList-componentDidMount');
            // console.log(this.props.carmodel);
            this.props.fetchTrimLevelsByCarmodel(this.props.carmodel);
            // console.log(this.props.trimlevels);
        }
    }

    renderTrimLevelsName() {
        return this.props.trimlevels.map(trimlevel => {
            return (
                <th scope="col">{trimlevel.name}</th>
            );
        });
    }

    renderTrimLevelsContent() {
        var numOfTrimLevels = this.props.trimlevels.length;
        return (
            <tbody>
                <tr>
                    <th scope="row">價格</th>
                    {this.props.trimlevels.map(trimlevel => { return ( <td>{trimlevel.price}</td> ); })}
                </tr>
                {/* Admin: Edit, Delete */}
                {this.renderAdminRow()}
            
                <>{/* Body Spec properties */}
                <tr>
                    <th scope="row" colSpan={numOfTrimLevels + 1} className="text-center">車身資料</th>
                </tr>
                <tr>
                    <th scope="row">座位數(人)</th>
                    {this.props.trimlevels.map(trimlevel => { return ( <td>{trimlevel.seats}</td> ); })}
                </tr>
                <tr>
                    <th scope="row">車身型式</th>
                    {this.props.trimlevels.map(trimlevel => { return ( <td>{BODY_STYLES_ZH[trimlevel.bodyStyle]}</td> ); })}
                </tr>
                <tr>
                    <th scope="row">車長(mm)</th>
                    {this.props.trimlevels.map(trimlevel => { return ( <td>{trimlevel.length}</td> ); })}
                </tr>
                <tr>
                    <th scope="row">車寬(mm)</th>
                    {this.props.trimlevels.map(trimlevel => { return ( <td>{trimlevel.width}</td> ); })}
                </tr>
                <tr>
                    <th scope="row">車高(mm)</th>
                    {this.props.trimlevels.map(trimlevel => { return ( <td>{trimlevel.height}</td> ); })}
                </tr>
                <tr>
                    <th scope="row">軸距(mm)</th>
                    {this.props.trimlevels.map(trimlevel => { return ( <td>{trimlevel.wheelbase}</td> ); })}
                </tr>
                <tr>
                    <th scope="row">車重(kg)</th>
                    {this.props.trimlevels.map(trimlevel => { return ( <td>{trimlevel.weight}</td> ); })}
                </tr>
                <tr>
                    <th scope="row">後行李箱標準容積(L)</th>
                    {this.props.trimlevels.map(trimlevel => { return ( <td>{trimlevel.standardCargoVolume}</td> ); })}
                </tr>
                <tr>
                    <th scope="row">後行李箱五人座容積(L)</th>
                    {this.props.trimlevels.map(trimlevel => { return ( <td>{trimlevel.fiveSeatsCargoVolume}</td> ); })}
                </tr>
                <tr>
                    <th scope="row">後行李箱最大容積(L)</th>
                    {this.props.trimlevels.map(trimlevel => { return ( <td>{trimlevel.maxCargoVolume}</td> ); })}
                </tr>
                <tr>
                    <th scope="row">前行李箱容積(L)</th>
                    {this.props.trimlevels.map(trimlevel => { return ( <td>{trimlevel.frunkCargoVolume}</td> ); })}
                </tr>
                </>

                <>{/* Powertrain properties */}
                <tr>
                    <th scope="row" colSpan={numOfTrimLevels + 1} className="text-center">動力系統</th>
                </tr>
                <tr>
                    <th scope="row">動力型式</th>
                    {this.props.trimlevels.map(trimlevel => { return ( <td>{POWER_TYPES_ZH[trimlevel.powerType]}</td> ); })}
                </tr>
                <tr>
                    <th scope="row">變速系統</th>
                    {this.props.trimlevels.map(trimlevel => { return ( <td>{trimlevel.transmission}</td> ); })}
                </tr>
                <tr>
                    <th scope="row">驅動形式</th>
                    {this.props.trimlevels.map(trimlevel => { return ( <td>{trimlevel.driveWheel}</td> ); })}
                </tr>
                </>

                <>{/* Engine properties */}
                <tr>
                    <th scope="row" colSpan={numOfTrimLevels + 1} className="text-center">引擎資料</th>
                </tr>
                <tr>
                    <th scope="row">排氣量(c.c)</th>
                    {this.props.trimlevels.map(trimlevel => { return ( <td>{trimlevel.engineDisplacement}</td> ); })}
                </tr>
                <tr>
                    <th scope="row">最大扭力(kgm@rpm)</th>
                    {this.props.trimlevels.map(trimlevel => { return ( <td>{trimlevel.maxTorque}</td> ); })}
                </tr>
                <tr>
                    <th scope="row">最大馬力(hp@rpm)</th>
                    {this.props.trimlevels.map(trimlevel => { return ( <td>{trimlevel.maxHorsepower}</td> ); })}
                </tr>
                <tr>
                    <th scope="row">市區油耗(km/L)</th>
                    {this.props.trimlevels.map(trimlevel => { return ( <td>{trimlevel.cityFuelEfficiency}</td> ); })}
                </tr>
                <tr>
                    <th scope="row">高速油耗(km/L)</th>
                    {this.props.trimlevels.map(trimlevel => { return ( <td>{trimlevel.freewayFuelEfficiency}</td> ); })}
                </tr>
                <tr>
                    <th scope="row">平均油耗(km/L)</th>
                    {this.props.trimlevels.map(trimlevel => { return ( <td>{trimlevel.averageFuelEfficiency}</td> ); })}
                </tr>
                </>

                <>{/* Electric Motor properties */}
                <tr>
                    <th scope="row" colSpan={numOfTrimLevels + 1} className="text-center">電能動力資料</th>
                </tr>
                <tr>
                    <th scope="row">電池容量(kWh)</th>
                    {this.props.trimlevels.map(trimlevel => { return ( <td>{trimlevel.batteryCapacity}</td> ); })}
                </tr>
                <tr>
                    <th scope="row">馬達最大扭力(Nm)</th>
                    {this.props.trimlevels.map(trimlevel => { return ( <td>{trimlevel.motorTorque}</td> ); })}
                </tr>
                <tr>
                    <th scope="row">馬達最大功率(kW)</th>
                    {this.props.trimlevels.map(trimlevel => { return ( <td>{trimlevel.motorPower}</td> ); })}
                </tr>
                <tr>
                    <th scope="row">電耗(Wh/km)</th>
                    {this.props.trimlevels.map(trimlevel => { return ( <td>{trimlevel.electricEfficiency}</td> ); })}
                </tr>
                <tr>
                    <th scope="row">純電行駛里程(km) WLTP?</th>
                    {this.props.trimlevels.map(trimlevel => { return ( <td>{trimlevel.electricRange}</td> ); })}
                </tr>
                <tr>
                    <th scope="row">市區行駛里程(km)</th>
                    {this.props.trimlevels.map(trimlevel => { return ( <td>{trimlevel.cityRange}</td> ); })}
                </tr>
                <tr>
                    <th scope="row">高速行駛里程(km)</th>
                    {this.props.trimlevels.map(trimlevel => { return ( <td>{trimlevel.freewayRange}</td> ); })}
                </tr>
                <tr>
                    <th scope="row">綜合行駛里程(km)</th>
                    {this.props.trimlevels.map(trimlevel => { return ( <td>{trimlevel.combinedRange}</td> ); })}
                </tr>
                <tr>
                    <th scope="row">充電時間</th>
                    {this.props.trimlevels.map(trimlevel => { return ( <td>{trimlevel.chargingTime}</td> ); })}
                </tr>
                </>

                <>{/* Safety properties */}
                <tr>
                    <th scope="row" colSpan={numOfTrimLevels + 1} className="text-center">安全配備</th>
                </tr>
                <tr>
                    <th scope="row">ABS-防鎖死煞車系統</th>
                    {this.props.trimlevels.map(trimlevel => { return ( <td>{trimlevel.antilockBrakingSystem}</td> ); })}
                </tr>
                <tr>
                    <th scope="row">ASR-循跡防滑控制系統</th>
                    {this.props.trimlevels.map(trimlevel => { return ( <td>{trimlevel.accelerationStabilityRetainer}</td> ); })}
                </tr>
                <tr>
                    <th scope="row">EBD-電子煞車力道分配系統</th>
                    {this.props.trimlevels.map(trimlevel => { return ( <td>{trimlevel.electronicBrakeforceDistribution}</td> ); })}
                </tr>
                <tr>
                    <th scope="row">BAS-煞車力道輔助系統</th>
                    {this.props.trimlevels.map(trimlevel => { return ( <td>{trimlevel.brakeAssistSystem}</td> ); })}
                </tr>
                <tr>
                    <th scope="row">ESP-車身動態穩定系統</th>
                    {this.props.trimlevels.map(trimlevel => { return ( <td>{trimlevel.electronicStabilityProgram}</td> ); })}
                </tr>
                <tr>
                    <th scope="row">定速</th>
                    {this.props.trimlevels.map(trimlevel => { return ( <td>{trimlevel.cruiseControl}</td> ); })}
                </tr>
                <tr>
                    <th scope="row">ACC-主動車距巡航控制系統</th>
                    {this.props.trimlevels.map(trimlevel => { return ( <td>{trimlevel.adaptiveCruiseControl}</td> ); })}
                </tr>
                <tr>
                    <th scope="row">FCW-前方碰撞警示</th>
                    {this.props.trimlevels.map(trimlevel => { return ( <td>{trimlevel.forwardCollisionWarning}</td> ); })}
                </tr>
                <tr>
                    <th scope="row">AEB-自動緊急煞車</th>
                    {this.props.trimlevels.map(trimlevel => { return ( <td>{trimlevel.automaticEmergencyBraking}</td> ); })}
                </tr>
                <tr>
                    <th scope="row">LDW-車道偏離警示</th>
                    {this.props.trimlevels.map(trimlevel => { return ( <td>{trimlevel.laneDepartureWarning}</td> ); })}
                </tr>
                <tr>
                    <th scope="row">LDR-車道偏離修正</th>
                    {this.props.trimlevels.map(trimlevel => { return ( <td>{trimlevel.laneDepartureRevise}</td> ); })}
                </tr>
                <tr>
                    <th scope="row">LKA-車道維持</th>
                    {this.props.trimlevels.map(trimlevel => { return ( <td>{trimlevel.laneKeepingAssistance}</td> ); })}
                </tr>
                <tr>
                    <th scope="row">RCTA-後方車側警示</th>
                    {this.props.trimlevels.map(trimlevel => { return ( <td>{trimlevel.rearCrossTrafficWarning}</td> ); })}
                </tr>
                <tr>
                    <th scope="row">BSW-盲點偵測警示</th>
                    {this.props.trimlevels.map(trimlevel => { return ( <td>{trimlevel.blindSpotWarning}</td> ); })}
                </tr>
                <tr>
                    <th scope="row">RAEB-後方車流自動煞車</th>
                    {this.props.trimlevels.map(trimlevel => { return ( <td>{trimlevel.reverseAutomaticEmergencyBraking}</td> ); })}
                </tr>
                <tr>
                    <th scope="row">HSA-斜坡起步輔助</th>
                    {this.props.trimlevels.map(trimlevel => { return ( <td>{trimlevel.hillStartAssis}</td> ); })}
                </tr>
                <tr>
                    <th scope="row">HDC-陡坡緩降系統</th>
                    {this.props.trimlevels.map(trimlevel => { return ( <td>{trimlevel.hillDescentControl}</td> ); })}
                </tr>
                <tr>
                    <th scope="row">氣囊總數</th>
                    {this.props.trimlevels.map(trimlevel => { return ( <td>{trimlevel.airBagNumbers}</td> ); })}
                </tr>
                <tr>
                    <th scope="row">ISOFIX</th>
                    {this.props.trimlevels.map(trimlevel => { return ( <td>{trimlevel.isofix}</td> ); })}
                </tr>
                <tr>
                    <th scope="row">自動停車</th>
                    {this.props.trimlevels.map(trimlevel => { return ( <td>{trimlevel.activeParkingAssistance}</td> ); })}
                </tr>
                <tr>
                    <th scope="row">IIHS</th>
                    {this.props.trimlevels.map(trimlevel => { return ( <td>{trimlevel.iihsDescription}</td> ); })}
                </tr>
                <tr>
                    <th scope="row">NCAP</th>
                    {this.props.trimlevels.map(trimlevel => { return ( <td>{trimlevel.ncapDescription}</td> ); })}
                </tr>
                <tr>
                    <th scope="row">環景360度</th>
                    {this.props.trimlevels.map(trimlevel => { return ( <td>{trimlevel.surroundViewCamera}</td> ); })}
                </tr>
                <tr>
                    <th scope="row">倒車顯影</th>
                    {this.props.trimlevels.map(trimlevel => { return ( <td>{trimlevel.rearViewCamera}</td> ); })}
                </tr>
                </>
            </tbody>
        );
    }

    renderSpecTable() {
        console.log(this.props.trimlevels);

        return (
            <div className="table-responsive">
                <table className="table table-striped table-hover">
                    <thead>
                        <tr>
                            <th scope="col">規格/車型</th>
                            {this.renderTrimLevelsName()}
                        </tr>
                    </thead>

                    {this.renderTrimLevelsContent()}
                </table>
            </div>
        );
    }

    renderAdminRow(){
        if (this.props.isAdminUser) {
            return (
                <tr>
                    <th scope="row">進階</th>
                    {this.props.trimlevels.map(trimlevel => { return ( <td>{this.renderAdmin(trimlevel)}</td> ); })}
                </tr>
            );
        }
    }

    renderAdmin(trimlevel) {
        if (this.props.isAdminUser) {
            return (
                <div className="text-center">
                    <Link to={`${TRIMLEVELS_ROOT}/edit/${trimlevel.id}`} className="btn btn-primary m-1">
                        Edit
                    </Link>
                    <Link to={`${TRIMLEVELS_ROOT}/delete/${trimlevel.id}`} className="btn btn-danger m-1">
                        Delete
                    </Link>
                </div>
            );
        }
    }

    renderCreate() {
        if (this.props.isAdminUser) {
            return (                
                <div style={{ textAlign: 'right'}}>
                    <Link to={`${TRIMLEVELS_ROOT}/new`} className="btn btn-success mb-3 text-nowrap"> 
                        Create Trim Level
                    </Link>
                </div>
            );
        } 
    }


    render() {
        if (!this.props.trimlevels) {
            return <div>Loading...</div>
        }

        return (
            <div className="container">
                <div className="my-2">
                    {this.renderSpecTable()}
                </div>
                <div className="mx-2 my-2 d-flex justify-content-center">
                    {this.renderCreate()}
                </div>
            </div>
        )
    };
    
}

const mapStateToProps = (state, ownProps) => {
    // console.log(ownProps.carmodel)
    // console.log('mapStateToProps');
    // console.log(state.carmodels)
    return { 
        trimlevels:  Object.values(
            _.pickBy(state.trimlevels, 
                (trimlevel) => {
                    return String(trimlevel.carmodelId) === String(ownProps.carmodel.id);
                }
            )),
        isAdminUser: state.auth.isAdminUser
    }
};

export default connect(mapStateToProps, { fetchTrimLevelsByCarmodel })(TrimLevelList);
