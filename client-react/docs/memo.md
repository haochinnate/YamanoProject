
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


- TrimLevel property
  - size
    - 
    - 
    - 
  - ADAS
    - 
    - 
    - 
    - 
    - 
  - power

- https://www.jaguar.co.uk/jaguar-range/i-pace/specifications/index.html


- 篩選:
  - UCAR
    - bodyStyle
    - price
    - size
    - 排氣量
    - 座位
    - 產地
    - 動力
    - 能源
    - 配備
  - 8891
    - price
    - bodyStyle
    - 變速箱形式
    - 排氣量
    - 燃料
    - 乘客數
    - 車門
    - 配備
  - Yahoo
    - price
    - bodyStyle
    - 動力形式
    - 驅動形式
    - 座位數

ESP: 車身動態穩定系統(ESP=VSC=VSA=ESC=DSC), 急彎.濕滑路面等 控制車身不打滑*3 
     ESP預設為標配, 如果沒有會再額外註明
HSA: (Hill Start Assis)斜坡上坡起步輔助, 鬆開剎車時, 會維持剎車一段時間, 避免因斜坡往後滑
     https://c.8891.com.tw/pedia/8/tid/234
BSW: (Blind-spot warning)盲點偵測警示, 當車側車輛，進入後照鏡死角時提醒
FCW: (Forward-collision warning)前方碰撞預警
AEB: (Automatic emergency braking)自動緊急煞停
     一定範圍內有物體靠近車輛自動煞停(有條件啟動)
     * AEB介紹：https://www.youtube.com/watch?v=2uOA7BOYHtQ
ACC: (Adaptive Cruise Control)主動車距巡航控制系統, 
     藉由雷達偵測車距自動保持車距
     * ACC介紹：https://www.youtube.com/watch?v=FRqxi_HcmW0
LDW: (Lane Departure Warning)車道偏離警示, 告訴IO您現在的車道您走歪了
     https://c.8891.com.tw/pedia/8/tid/231
LKA: (Lane-keeping assist)車道維持輔助
RCTA: (Rear Cross Traffic Alert) 後方車側警示系統
ISOFIX: 預設為標配, 如果沒有會再額外註明
//疲勞：疲勞駕駛警示系統：偵測駕駛疲勞程度主動提醒駕駛休息 或駕駛注意力警示系統


燃料縮寫說明: 
    汽: 汽油
    柴: 柴油
    Hy: Hybrid油電混合
    PH: Plugin Hybrid 插電式油電混合
    電: 純電動車


https://www.ptt.cc/bbs/car/M.1627294142.A.0E0.html
自煞>前預
後煞>後警
置中>偏維>偏警
斜坡>上坡
環景
盲點
自停


2018時其實就有相關報導, 本板代號 #1S5hZWTz
當時只作出六項建議(FCW.AEB.ACC.BSW.LDW.LKA)

查了一下2020/8有再作更新
Clearing the Confusion: Recommended Common Naming for Advanced Driver
Assistance Technologies
https://tinyurl.com/drw5tuuk (消費者報告原文含命名建議PDF)

這次分了五大類共二十項命名建議
想說看了就順便翻中文
如果板友有更通順或達意的翻譯可以分享一下 XD

這份清單基於系統功能作出簡單並且具體的通用命名
目的在減輕消費者的困擾並且以一致的方式定義ADAS的功能
這對於確保駕駛認知到這些系統是輔助而非取代實際參與的駕駛相當重要
同時清單的用意並非取代各家製造商自有的系統名稱
而是幫助消費者辨別系統名稱內的各項關鍵功能並提供清楚的訊息


****COLLISION WARNING 碰撞警告
Blind Spot Warning
盲點警示
偵測並警示盲區車輛的存在
某些系統在駕駛打方向燈時提供額外的警示

Forward Collision Warning
前方碰撞警示
偵測並警示前方可能的車輛碰撞事件
某些系統同時提供行人或其他偵測目標

Lane Departure Warning
車道偏離警示
監控車輛在車道上的位置
在車輛靠近或跨越標線時發出警示

Parking Collision Warning
停車碰撞警示
停車過程中偵測並警示車輛附近物體

Rear Cross Traffic Warning
後方車側警示
倒退檔時偵測並警示後方側邊接近的車輛
某些系統同時提供行人或其他偵測目標


****COLLISION INTERVENTION 碰撞干預
Automatic Emergency Braking
自動緊急煞車
偵測前方可能的車輛碰撞事件
提供警示並且自動煞車以避免碰撞或減輕撞擊
某些系統同時提供行人或其他偵測目標

Automatic Emergency Steering
自動緊急轉向
偵測前方可能的車輛碰撞事件
並自動轉向以避免碰撞或減輕撞擊
某些系統同時提供行人或其他偵測目標

Reverse Automatic Emergency Braking
倒退檔時偵測可能的車輛碰撞事件
並且自動煞車以避免碰撞或減輕撞擊
某些系統同時提供行人或其他偵測目標


****DRIVING CONTROL ASSISTANCE 駕駛控制輔助 
Adaptive Cruise Control
自我調整定速巡航
定速巡航並且透過加速、減速來保持駕駛設定的前方車距
某些系統可以停止後繼續運作, 某些不行

Lane Keeping Assistance
車道保持輔助
提供轉向輔助以協助駕駛預防車輛跨越車道
某些系統可以輔助車輛保持行駛車道中間

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