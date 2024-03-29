
- json-server API example

```cmd
GET /contacts
POST /contacts
GET /contacts/{cID}
PUT /contacts/{cID}
DELETE /contacts/{cID}

GET /contacts/{cID}/notes
POST /contacts/{cID}/notes
GET /contacts/{cID}/notes/{nID}
PUT /contacts/{cID}/notes/{nID}
DELETE /contacts/{cID}/notes/{nID}
```

- category
  - Sedan(轎車)
  - Wagon(旅行車)
  - Coupe(雙門轎跑車)
  - Super Car(超級跑車)
  - Hatchback(掀背車)
  - Convertible(敞篷車)
  - SUV(運動休旅車)
  - Crossover(跨界休旅車)
  - MPV(廂式休旅)
  - Trunk Pickup(貨卡車)
  - Commercial(商用車)

- manufacturer property
  - "name": "Mazda",
  - "chineseName": "馬自達",
  - "level": "一般",
  - "officialUrl": "https://www.mazda.com.tw",
  - "id": 2


- carmodel property
  - {carmodel.id}
  - {carmodel.name}
  - {carmodel.bodyStyle}
  - {carmodel.officialUrl}
  - {carmodel.isArchived}
  - {carmodel.manufacturerId}
  - {carmodel.alias}
  - {carmodel.releaseDate}
  - {carmodel.yearsInfo}
  - {carmodel.mainImage} 


## 篩選條件

- 價格
- 車長
- (X)車寬
- (X)車高
- (X)車重
- bodyStyle 
- 乘客數/座位數
- 行李箱容積
- 燃料/動力形式/能源
- 排氣量
- 動力(馬力)
- (+)配備/配備, 一個配備 一個 checkbox
- (X)變速箱形式
- (X)驅動形式
- (X)產地


https://www.ptt.cc/bbs/car/M.1627294142.A.0E0.html


### 

- [電動車資料庫](https://ev-database.org/)


### ADAS 文章

- [原文](https://www.ptt.cc/bbs/car/M.1627294142.A.0E0.html)

2018時其實就有相關報導, 本板代號 #1S5hZWTz
當時只作出六項建議(FCW.AEB.ACC.BSW.LDW.LKA)

查了一下2020/8有再作更新
Clearing the Confusion: Recommended Common Naming for Advanced Driver
Assistance Technologies
https://tinyurl.com/drw5tuuk (消費者報告原文含命名建議PDF)



****COLLISION WARNING 碰撞警告

Parking Collision Warning
停車碰撞警示
停車過程中偵測並警示車輛附近物體


****COLLISION INTERVENTION 碰撞干預

Automatic Emergency Steering
自動緊急轉向
偵測前方可能的車輛碰撞事件
並自動轉向以避免碰撞或減輕撞擊
某些系統同時提供行人或其他偵測目標


****DRIVING CONTROL ASSISTANCE 駕駛控制輔助 
Adaptive Cruise Control
自我調整定速巡航
定速巡航並且透過加速、減速來保持駕駛設定的前方車距
某些系統可以停止後繼續運作, 某些不行

Active Driving Assistance
主動式駕駛輔助
同時提供轉向、煞車/加速輔助
駕駛必須持續監督此項輔助功能並保持對行車的責任


**** PARKING ASSISTANCE 停車輔助 
Backup Camera
倒車鏡頭
倒退時提供車輛後方影像

Surround View Camera
環視鏡頭
在停止或低速操作時
提供即時的部份或全部的車輛週邊影像

Active Parking Assistance
主動式停車輔助
在操作停車時提供轉向或其他輔助
駕駛可能被要求要操作加速、煞車且/或檔位選擇
某些系統可提供平行且/或垂直停車
駕駛必須持續監督此項輔助功能並保持對停車的責任

Remote Parking Assistance1
遠端停車輔助
駕駛不必實際坐在車輛裡
提供轉向、加速、煞車及選擇檔位來將車輛駛入或移出停車位
駕駛必須持續監督此項輔助功能並保持對停車的責任

Trailer Assistance
拖車輔助
在倒退準備連結拖車或已連結拖車進行倒退時提供視覺指引
某些系統有已連結拖車時提供額外的影像
某些系統在倒退時提供轉向輔助


**** OTHER DRIVER ASSISTANCE SYSTEMS 其他駕駛輔助系統
Automatic High Beams
自動遠燈
根據照明和交通狀況自動切換遠近燈

Driver Monitoring
駕駛監測
觀察駕駛行為來預測駕駛是否不適合從事行車任務
某些系統可能會監控眼睛動作或/且頭部位置

Head-Up Display
抬頭顯示
投射行車資訊到駕駛的前方視野

Night Vision
藉由在儀表板或抬頭顯示器投射增強的影像來強化前方夜間視野