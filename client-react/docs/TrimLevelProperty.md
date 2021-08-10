# TrimLevel property

## Basic

- 名稱(Name)
- 價格(Price)
- isArchived

## 車身外型
- 車身形式 BodyStyle
- 車門數(X) 
- 座位數 Seats 5人

## 車身尺碼
  
- length (mm)
- width (mm)
- height (mm)
- 軸距 (Wheelbase)(mm)
- 車重 (weight) (kg)
- 標準行李箱容積(StandardBootSpace, CargoVolume) (L)
- 座位傾倒後行李箱容積(ExtendedBootSpace_5) (L) 
- 座位傾倒後行李箱容積(ExtendedBootSpace_2) (L) 
- CargoVolumeMax
- 前行李箱容積(CargoVolumeFrunk)

## 動力系統

傳動系統和發動機合起來即為動力系統（powertrain）

- 動力形式/動力系統 Engine System?, Propulsion?
  - 燃料縮寫說明: 
    - 汽: 汽油 Petrol
    - 柴: 柴油 Diesel
    - HEV: Hybrid油電混合
    - PHEV: Plugin Hybrid 插電式油電混合
    - EV 電: 純電動車
    - MHEV(Mild Hybrid Electric Vehicles)


- 傳動系統 (Drivetrain)
  - 變速系統 (Transmission)
    - 手排
    - 自排
    - 手自排
    - 自手排
  - 傳動方式/驅動形式(DriveWheel)
    - 前驅
    - 後驅
    - 四驅

- 能源數據
  - 市區油耗 CityFuelEfficiency
  - 高速油耗 FreewayFuelEfficiency
  - 平均油耗 AverageFuelEfficiency
- 引擎系統 Engine
  - Engine Displacement排氣量(c.c)
  - MaxTorque最大扭力(kgm@rpm)
  - MaxHorsepower最大馬力(hp@rpm)
  (1 HP = 0.746kW)
  (1 PS = 0.735kW)
  (1 HP = 1.015PS)
- 電能動力 Electric Motor
  - 馬達能量來源: 電池
  - 電池種類
  - 電池容量 Battery Capacity(kWh)
  - 電池組總電壓
  - 馬達最大功率 TotalPower(kW PS)
  - 馬達最大扭力 TotalTorque(Nm)
  - 馬達出力(hp/kgm)
  - 油電綜效輸出
  - ElectricEfficiency/VehicleConsumtion
    - 177 Wh/km
  - 純電池里程  Electric Range
    - up to 213 miles (343 km) WLTP
  - CityRange
  - FreewayRange
  - CombinedRange
  - 充電時間 Charging time
    - AC 1-phase 7.2 kW 0%-100% 7 hours 30 minutes 
    - AC 3-phase 11 kW 0%–100% 7 hours 30 minutes
    - DC3 110 kW 5%-80% 38 minute

Charge Port	Type 2
Port Location	Left Side - Rear
Charge Power	11 kW AC
Charge Time (0->455 km)	7h30m
Charge Speed	61 km/h
 
Fastcharge Port	CCS
FC Port Location	Left Side - Rear
Fastcharge Power (max)	190 kW DC
Fastcharge Time (46->364 km)	34 min
Fastcharge Speed	560 km/h

## 輔助安全配備
  - ABS-Anti-lock Braking System-防鎖死煞車系統 
  - ASR-Acceleration Stability Retainer-循跡防滑控制系統
  - EBD-Electronic Brakeforce Distribution-電子煞車力道分配系統
  - BAS-BrakeAssistSystem-煞車力道輔助系統
  - ESP/ESC-車身動態穩定系統-Electronic Stability Program/Control
    - (ESP=VSC=VSA=ESC=DSC), 急彎.濕滑路面等 控制車身不打滑
  - CC-定速-Cruise Control
  - ACC-主動車距巡航控制系統-Adaptive Cruise Control 
    - (ACC) including Front Assist, City Emergency Braking system and speed limiter
    - 藉由雷達偵測車距自動保持車距
    - ACC介紹：https://www.youtube.com/watch?v=FRqxi_HcmW0
  - FCW-前方碰撞警示-Forward Collision Warning
    - 前方碰撞預警
    - 偵測並警示前方可能的車輛碰撞事件
    - 某些系統同時提供行人或其他偵測目標
  - AEB-自動緊急煞車-Automatic Emergency Braking
     - 一定範圍內有物體靠近車輛自動煞停(有條件啟動)
     - AEB介紹：https://www.youtube.com/watch?v=2uOA7BOYHtQ
     - 偵測前方可能的車輛碰撞事件
     - 提供警示並且自動煞車以避免碰撞或減輕撞擊
     - 某些系統同時提供行人或其他偵測目標
  - LDW-車道偏離警示-Lane Departure Warning
    - 監控車輛在車道上的位置, 在車輛靠近或跨越標線時發出警示
    - https://c.8891.com.tw/pedia/8/tid/231
  - 車道偏離修正 Lane Departure Revise
  - LKA-車道維持-Lane Keeping Assistance
    - 車道保持輔助
    - 提供轉向輔助以協助駕駛預防車輛跨越車道
    - 某些系統可以輔助車輛保持行駛車道中間
  - RCTA-後方車側警示-Rear Cross Traffic Warning
    - 倒退檔時偵測並警示後方側邊接近的車輛
    - 某些系統同時提供行人或其他偵測目標
  - BSW-盲點偵測警示-Blind Spot Warning
    - 盲點偵測警示, 當車側車輛，進入後照鏡死角時提醒
    - 偵測並警示盲區車輛的存在
    - 某些系統在駕駛打方向燈時提供額外的警示
  - RAEB-後方車流自動煞車-Reverse Automatic Emergency Braking
    - 倒退檔時偵測可能的車輛碰撞事件
    - 並且自動煞車以避免碰撞或減輕撞擊
    - 某些系統同時提供行人或其他偵測目標
  - HSA-斜坡起步輔助-Hill Start Assis
    - 斜坡上坡起步輔助, 鬆開剎車時, 會維持剎車一段時間, 避免因斜坡往後滑
    - https://c.8891.com.tw/pedia/8/tid/234
  - HDC-陡坡緩降系統-Hill Descent Control
  - 氣囊總數(AirBagNumbers)
  - ISOFIX

- 其他
  - 自動停車-Active Parking Assistance
  - IIHSRating
  - IIHSDescription
  - NCAPRating
  - NCAPDescription
  - 環景360度-Surround View Camera
  - 倒車顯影-Rear View Camera


