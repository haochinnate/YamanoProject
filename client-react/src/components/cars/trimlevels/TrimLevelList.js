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

    
    //                             <label htmlFor="powerType" className="form-label">動力型式</label>
    //                             <label htmlFor="transmission" className="form-label">變速系統</label>
    //                             <label htmlFor="driveWheel" className="form-label">驅動形式</label>


    //                     引擎資料
    //                             <label htmlFor="engineDisplacement" className="form-label">排氣量(c.c)</label>



    // const renderAccordionEngineProperties = () => {
    //     return (
    //             <div id="panelsEngineProperties-content" className="accordion-collapse collapse show" 
    //                 aria-labelledby="panelsEngineProperties-heading">
    //                 <div className="accordion-body">
    //                     <div className="row">

    //                         {/* Engine Displacement */}
    //                         <div className="col-md-3">
                                    
    //                             <input id="engineDisplacement" type="number" className="form-control" 
    //                                 value={engineDisplacement} onChange={engineDisplacementChangedHandler} onBlur={engineDisplacementBlurHandler}>
    //                             </input>
    //                         </div>                            

    //                         {/* Max Torque */}
    //                         <div className="col-md-3">
    //                             <label htmlFor="maxTorque" className="form-label">最大扭力(kgm@rpm)</label>
                                    
    //                             <input id="maxTorque" type="number" className="form-control" 
    //                                 value={maxTorque} onChange={maxTorqueChangedHandler} onBlur={maxTorqueBlurHandler}>
    //                             </input>
    //                         </div>     

    //                         {/* Max Horsepower */}
    //                         <div className="col-md-3">
    //                             <label htmlFor="maxHorsepower" className="form-label">最大馬力(hp@rpm)</label>
                                    
    //                             <input id="maxHorsepower" type="number" className="form-control" 
    //                                 value={maxHorsepower} onChange={maxHorsepowerChangedHandler} onBlur={maxHorsepowerBlurHandler}>
    //                             </input>
    //                         </div> 

    //                         {/* City Fuel Efficiency */}
    //                         <div className="col-md-3">
    //                             <label htmlFor="cityFuelEfficiency" className="form-label">市區油耗(km/L)</label>
                                    
    //                             <input id="cityFuelEfficiency" type="number" className="form-control" 
    //                                 value={cityFuelEfficiency} onChange={cityFuelEfficiencyChangedHandler} onBlur={cityFuelEfficiencyBlurHandler}>
    //                             </input>
    //                         </div> 

    //                         {/* Freeway Fuel Efficiency */}
    //                         <div className="col-md-3">
    //                             <label htmlFor="freewayFuelEfficiency" className="form-label">高速油耗(km/L)</label>
                                    
    //                             <input id="freewayFuelEfficiency" type="number" className="form-control" 
    //                                 value={freewayFuelEfficiency} onChange={freewayFuelEfficiencyChangedHandler} onBlur={freewayFuelEfficiencyBlurHandler}>
    //                             </input>
    //                         </div> 

    //                         {/* Average Fuel Efficiency */}
    //                         <div className="col-md-3">
    //                             <label htmlFor="averageFuelEfficiency" className="form-label">平均油耗(km/L)</label>
                                    
    //                             <input id="averageFuelEfficiency" type="number" className="form-control" 
    //                                 value={averageFuelEfficiency} onChange={averageFuelEfficiencyChangedHandler} onBlur={averageFuelEfficiencyBlurHandler}>
    //                             </input>
    //                         </div> 

    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
    //     );
    // };

    // const renderAccordionElectricMotorProperties = () => {
    //     return (
    //         <div className="accordion-item">
    //             <h2 className="accordion-header" id="panelsElectricMotorProperties-heading">
    //                 <button className="accordion-button" type="button" 
    //                     data-bs-toggle="collapse" data-bs-target="#panelsElectricMotorProperties-content" 
    //                     aria-expanded="true" aria-controls="panelsElectricMotorProperties-content">
    //                     電能動力資料
    //                 </button>
    //             </h2>
                
    //             <div id="panelsElectricMotorProperties-content" className="accordion-collapse collapse show" 
    //                 aria-labelledby="panelsElectricMotorProperties-heading">
    //                 <div className="accordion-body">
    //                     <div className="row">

    //                         {/* Battery Capacity */}
    //                         <div className="col-md-3">
    //                             <label htmlFor="batteryCapacity" className="form-label">電池容量(kWh)</label>
                                    
    //                             <input id="batteryCapacity" type="number" className="form-control" 
    //                                 value={batteryCapacity} onChange={batteryCapacityChangedHandler} onBlur={batteryCapacityBlurHandler}>
    //                             </input>
    //                         </div>

    //                         {/* Motor Torque */}
    //                         <div className="col-md-3">
    //                             <label htmlFor="motorTorque" className="form-label">馬達最大扭力(Nm)</label>
                                    
    //                             <input id="motorTorque" type="number" className="form-control" 
    //                                 value={motorTorque} onChange={motorTorqueChangedHandler} onBlur={motorTorqueBlurHandler}>
    //                             </input>
    //                         </div>     

    //                         {/* Motor Power */}
    //                         <div className="col-md-3">
    //                             <label htmlFor="motorPower" className="form-label">馬達最大功率(kW)</label>
                                    
    //                             <input id="motorPower" type="number" className="form-control" 
    //                                 value={motorPower} onChange={motorPowerChangedHandler} onBlur={motorPowerBlurHandler}>
    //                             </input>
    //                         </div> 

    //                         {/* Electric Efficiency */}
    //                         <div className="col-md-3">
    //                             <label htmlFor="electricEfficiency" className="form-label">電耗(Wh/km)</label>
                                    
    //                             <input id="electricEfficiency" type="number" className="form-control" 
    //                                 value={electricEfficiency} onChange={electricEfficiencyChangedHandler} onBlur={electricEfficiencyBlurHandler}>
    //                             </input>
    //                         </div> 

    //                         {/* Electric Range */}
    //                         <div className="col-md-3">
    //                             <label htmlFor="electricRange" className="form-label">純電行駛里程(km) WLTP?</label>
                                    
    //                             <input id="electricRange" type="number" className="form-control" 
    //                                 value={electricRange} onChange={electricRangeChangedHandler} onBlur={electricRangeBlurHandler}>
    //                             </input>
    //                         </div>

    //                         {/* City Range */}
    //                         <div className="col-md-3">
    //                             <label htmlFor="cityRange" className="form-label">市區行駛里程(km)</label>
                                    
    //                             <input id="cityRange" type="number" className="form-control" 
    //                                 value={cityRange} onChange={cityRangeChangedHandler} onBlur={cityRangeBlurHandler}>
    //                             </input>
    //                         </div>

    //                         {/* Freeway Range */}
    //                         <div className="col-md-3">
    //                             <label htmlFor="freewayRange" className="form-label">高速行駛里程(km)</label>
                                    
    //                             <input id="freewayRange" type="number" className="form-control" 
    //                                 value={freewayRange} onChange={freewayRangeChangedHandler} onBlur={freewayRangeBlurHandler}>
    //                             </input>
    //                         </div>

    //                         {/* Combined Range */}
    //                         <div className="col-md-3">
    //                             <label htmlFor="combinedRange" className="form-label">綜合行駛里程(km)</label>
                                    
    //                             <input id="combinedRange" type="number" className="form-control" 
    //                                 value={combinedRange} onChange={combinedRangeChangedHandler} onBlur={combinedRangeBlurHandler}>
    //                             </input>
    //                         </div> 

    //                         {/* Charging Time */}
    //                         <div className="col-md-12">
    //                             <label htmlFor="chargingTime" className="form-label">充電時間</label>
                                    
    //                             <input type="text" className="form-control" id="chargingTime" 
    //                                 value={chargingTime} onChange={chargingTimeChangedHandler} onBlur={chargingTimeBlurHandler}>
    //                             </input>
    //                         </div>

    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
    //     );
    // };

    // const renderAccordionSafetyProperties = () => {
    //     return (
    //         <div className="accordion-item">
    //             <h2 className="accordion-header" id="panelsSafetyProperties-heading">
    //                 <button className="accordion-button" type="button" 
    //                     data-bs-toggle="collapse" data-bs-target="#panelsSafetyProperties-content" 
    //                     aria-expanded="true" aria-controls="panelsSafetyProperties-content">
    //                     安全配備
    //                 </button>
    //             </h2>
                
    //             <div id="panelsSafetyProperties-content" className="accordion-collapse collapse show" 
    //                 aria-labelledby="panelsSafetyProperties-heading">
    //                 <div className="accordion-body">
    //                     <div className="row">

    //                         {/* ABS 防鎖死煞車系統 */}
    //                         <div className="col-md-4">
    //                             <label htmlFor="antilockBrakingSystem" className="form-label">ABS-防鎖死煞車系統</label>
                                    
    //                             <input type="text" className="form-control" id="antilockBrakingSystem" 
    //                                 value={antilockBrakingSystem} onChange={antilockBrakingSystemChangedHandler} onBlur={antilockBrakingSystemBlurHandler}>
    //                             </input>
    //                         </div>

    //                         {/* ASR 循跡防滑控制系統 */}
    //                         <div className="col-md-4">
    //                             <label htmlFor="accelerationStabilityRetainer" className="form-label">ASR-循跡防滑控制系統</label>
                                    
    //                             <input type="text" className="form-control" id="accelerationStabilityRetainer" 
    //                                 value={accelerationStabilityRetainer} onChange={accelerationStabilityRetainerChangedHandler} onBlur={accelerationStabilityRetainerBlurHandler}>
    //                             </input>
    //                         </div>

    //                         {/* EBD 電子煞車力道分配系統 */}
    //                         <div className="col-md-4">
    //                             <label htmlFor="electronicBrakeforceDistribution" className="form-label">EBD-電子煞車力道分配系統</label>
                                    
    //                             <input type="text" className="form-control" id="electronicBrakeforceDistribution" 
    //                                 value={electronicBrakeforceDistribution} onChange={electronicBrakeforceDistributionChangedHandler} 
    //                                 onBlur={electronicBrakeforceDistributionBlurHandler}>
    //                             </input>
    //                         </div>

    //                         {/* BAS 煞車力道輔助系統 */}
    //                         <div className="col-md-4">
    //                             <label htmlFor="brakeAssistSystem" className="form-label">BAS-煞車力道輔助系統</label>
                                    
    //                             <input type="text" className="form-control" id="brakeAssistSystem" 
    //                                 value={brakeAssistSystem} onChange={brakeAssistSystemChangedHandler} onBlur={brakeAssistSystemBlurHandler}>
    //                             </input>
    //                         </div>

    //                         {/* ESP 車身動態穩定系統 */}
    //                         <div className="col-md-4">
    //                             <label htmlFor="electronicStabilityProgram" className="form-label">ESP-車身動態穩定系統</label>
                                    
    //                             <input type="text" className="form-control" id="electronicStabilityProgram" 
    //                                 value={electronicStabilityProgram} onChange={electronicStabilityProgramChangedHandler} 
    //                                 onBlur={electronicStabilityProgramBlurHandler}>
    //                             </input>
    //                         </div>

    //                         {/* 定速 */}
    //                         <div className="col-md-4">
    //                             <label htmlFor="cruiseControl" className="form-label">定速</label>
                                    
    //                             <input type="text" className="form-control" id="cruiseControl" 
    //                                 value={cruiseControl} onChange={cruiseControlChangedHandler} onBlur={cruiseControlBlurHandler}>
    //                             </input>
    //                         </div>

    //                         {/* ACC 主動車距巡航控制系統 */}
    //                         <div className="col-md-4">
    //                             <label htmlFor="adaptiveCruiseControl" className="form-label">ACC-主動車距巡航控制系統</label>
                                    
    //                             <input type="text" className="form-control" id="adaptiveCruiseControl" 
    //                                 value={adaptiveCruiseControl} onChange={adaptiveCruiseControlChangedHandler} onBlur={adaptiveCruiseControlBlurHandler}>
    //                             </input>
    //                         </div>

    //                         {/* FCW 前方碰撞警示 */}
    //                         <div className="col-md-4">
    //                             <label htmlFor="forwardCollisionWarning" className="form-label">FCW-前方碰撞警示</label>
                                    
    //                             <input type="text" className="form-control" id="forwardCollisionWarning" 
    //                                 value={forwardCollisionWarning} onChange={forwardCollisionWarningChangedHandler} onBlur={forwardCollisionWarningBlurHandler}>
    //                             </input>
    //                         </div>
                            
    //                         {/* AEB 自動緊急煞車 */}
    //                         <div className="col-md-4">
    //                             <label htmlFor="automaticEmergencyBraking" className="form-label">AEB-自動緊急煞車</label>
                                    
    //                             <input type="text" className="form-control" id="automaticEmergencyBraking" 
    //                                 value={automaticEmergencyBraking} onChange={automaticEmergencyBrakingChangedHandler} onBlur={automaticEmergencyBrakingBlurHandler}>
    //                             </input>
    //                         </div>

    //                         {/* LDW 車道偏離警示 */}
    //                         <div className="col-md-4">
    //                             <label htmlFor="laneDepartureWarning" className="form-label">LDW-車道偏離警示</label>
                                    
    //                             <input type="text" className="form-control" id="laneDepartureWarning" 
    //                                 value={laneDepartureWarning} onChange={laneDepartureWarningChangedHandler} onBlur={laneDepartureWarningBlurHandler}>
    //                             </input>
    //                         </div>

    //                         {/* LDR 車道偏離修正 */}
    //                         <div className="col-md-4">
    //                             <label htmlFor="laneDepartureRevise" className="form-label">LDR-車道偏離修正</label>
                                    
    //                             <input type="text" className="form-control" id="laneDepartureRevise" 
    //                                 value={laneDepartureRevise} onChange={laneDepartureReviseChangedHandler} onBlur={laneDepartureReviseBlurHandler}>
    //                             </input>
    //                         </div>                                                                                    

    //                         {/* LKA 車道維持 */}
    //                         <div className="col-md-4">
    //                             <label htmlFor="laneKeepingAssistance" className="form-label">LKA-車道維持</label>
                                    
    //                             <input type="text" className="form-control" id="laneKeepingAssistance" 
    //                                 value={laneKeepingAssistance} onChange={laneKeepingAssistanceChangedHandler} onBlur={laneKeepingAssistanceBlurHandler}>
    //                             </input>
    //                         </div>

    //                         {/* RCTA 後方車側警示 */}
    //                         <div className="col-md-4">
    //                             <label htmlFor="rearCrossTrafficWarning" className="form-label">RCTA-後方車側警示</label>
                                    
    //                             <input type="text" className="form-control" id="rearCrossTrafficWarning" 
    //                                 value={rearCrossTrafficWarning} onChange={rearCrossTrafficWarningChangedHandler} onBlur={rearCrossTrafficWarningBlurHandler}>
    //                             </input>
    //                         </div>  

    //                         {/* BSW 盲點偵測警示 */}
    //                         <div className="col-md-4">
    //                             <label htmlFor="blindSpotWarning" className="form-label">BSW-盲點偵測警示</label>
                                    
    //                             <input type="text" className="form-control" id="blindSpotWarning" 
    //                                 value={blindSpotWarning} onChange={blindSpotWarningChangedHandler} onBlur={blindSpotWarningBlurHandler}>
    //                             </input>
    //                         </div>    

    //                         {/* RAEB 後方車流自動煞車 */}
    //                         <div className="col-md-4">
    //                             <label htmlFor="reverseAutomaticEmergencyBraking" className="form-label">RAEB-後方車流自動煞車</label>
                                    
    //                             <input type="text" className="form-control" id="reverseAutomaticEmergencyBraking" 
    //                                 value={reverseAutomaticEmergencyBraking} onChange={reverseAutomaticEmergencyBrakingChangedHandler} onBlur={reverseAutomaticEmergencyBrakingBlurHandler}>
    //                             </input>
    //                         </div>    

    //                         {/* HSA 斜坡起步輔助 */}
    //                         <div className="col-md-4">
    //                             <label htmlFor="hillStartAssis" className="form-label">HSA-斜坡起步輔助</label>
                                    
    //                             <input type="text" className="form-control" id="hillStartAssis" 
    //                                 value={hillStartAssis} onChange={hillStartAssisChangedHandler} onBlur={hillStartAssisBlurHandler}>
    //                             </input>
    //                         </div>    

    //                         {/* HDC 陡坡緩降系統 */}
    //                         <div className="col-md-4">
    //                             <label htmlFor="hillDescentControl" className="form-label">HDC-陡坡緩降系統</label>
                                    
    //                             <input type="text" className="form-control" id="hillDescentControl" 
    //                                 value={hillDescentControl} onChange={hillDescentControlChangedHandler} onBlur={hillDescentControlBlurHandler}>
    //                             </input>
    //                         </div>     

    //                         {/* AirBagNumbers */}
    //                         <div className="col-md-4">
    //                             <label htmlFor="airBagNumbers" className="form-label">氣囊總數</label>
                                    
    //                             <input type="text" className="form-control" id="airBagNumbers" 
    //                                 value={airBagNumbers} onChange={airBagNumbersChangedHandler} onBlur={airBagNumbersBlurHandler}>
    //                             </input>
    //                         </div>    

    //                         {/* ISOFIX */}
    //                         <div className="col-md-4">
    //                             <label htmlFor="isofix" className="form-label">ISOFIX</label>
                                    
    //                             <input type="text" className="form-control" id="isofix" 
    //                                 value={isofix} onChange={isofixChangedHandler} onBlur={isofixBlurHandler}>
    //                             </input>
    //                         </div>  

    //                         {/* Active Parking Assistance 自動停車 */}
    //                         <div className="col-md-4">
    //                             <label htmlFor="activeParkingAssistance" className="form-label">自動停車</label>
                                    
    //                             <input type="text" className="form-control" id="activeParkingAssistance" 
    //                                 value={activeParkingAssistance} onChange={activeParkingAssistanceChangedHandler} onBlur={activeParkingAssistanceBlurHandler}>
    //                             </input>
    //                         </div>    

    //                         {/* IIHS */}
    //                         <div className="col-md-4">
    //                             <label htmlFor="iihsDescription" className="form-label">IIHS</label>
                                    
    //                             <input type="text" className="form-control" id="iihsDescription" 
    //                                 value={iihsDescription} onChange={iihsDescriptionChangedHandler} onBlur={iihsDescriptionBlurHandler}>
    //                             </input>
    //                         </div>  

    //                         {/* NCAP */}
    //                         <div className="col-md-4">
    //                             <label htmlFor="ncapDescription" className="form-label">NCAP</label>
                                    
    //                             <input type="text" className="form-control" id="ncapDescription" 
    //                                 value={ncapDescription} onChange={ncapDescriptionChangedHandler} onBlur={ncapDescriptionBlurHandler}>
    //                             </input>
    //                         </div>    

    //                         {/* 環景 */}
    //                         <div className="col-md-4">
    //                             <label htmlFor="surroundViewCamera" className="form-label">環景360度</label>
                                    
    //                             <input type="text" className="form-control" id="surroundViewCamera" 
    //                                 value={surroundViewCamera} onChange={surroundViewCameraChangedHandler} onBlur={surroundViewCameraBlurHandler}>
    //                             </input>
    //                         </div>                                                     

    //                         {/* 倒車顯影 */}
    //                         <div className="col-md-4">
    //                             <label htmlFor="rearViewCamera" className="form-label">倒車顯影</label>
                                    
    //                             <input type="text" className="form-control" id="rearViewCamera" 
    //                                 value={rearViewCamera} onChange={rearViewCameraChangedHandler} onBlur={rearViewCameraBlurHandler}>
    //                             </input>
    //                         </div>

    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
    //     );
    // };

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
