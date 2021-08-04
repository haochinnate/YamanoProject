
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
