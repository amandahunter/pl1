# My personal directions request

First, explore the various options through the Directions API https://developers.google.com/maps/documentation/directions/get-directions. 

Be creative and use multiple parameters from the API documentation to earn a top grade. The rubric is listed in the bottom of the MarkDown document. 

> Tip: Can't make changes? GitHub previews MD documents by default (read-only). Start editing to make the changes for your URL and JSON response below
<!--I put this geocode link here, which helps me get my place id for my destinations and origins. https://maps.googleapis.com/maps/api/geocode/json?address=50480+Sainte-M%C3%A8re-%C3%89glise,+France&destination=Utah+Beach&key=AIzaSyCM-WWHYHIKY-do4kquMy9Z4wQaQx51AuE

I did this search to find a nearby cheese shop? Bc France. 
https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=49.4099592,-1.3182362&radius=500&type=store&keyword=fromagerie&key=AIzaSyCM-WWHYHIKY-do4kquMy9Z4wQaQx51AuE

 -->
## Directions URL

```

https://maps.googleapis.com/maps/api/directions/json?origin=place_id:ChIJOXG4DzN5C0gRYGe5T0gUDAQ&destination=place_id:ChIJJz6d6Ot2C0gR4vTnEaljPuU&waypoints=place_id:ChIJFcvap915C0gRtqzkDqke9Pw&avoid=tolls%3Ahighways%3Aferries&mode=bicycling&units=metric&key=AIzaSyCM-WWHYHIKY-do4kquMy9Z4wQaQx51AuE
```

## Next paste the full JSON response to this query here:

{
   "geocoded_waypoints" : [
      {
         "geocoder_status" : "OK",
         "place_id" : "ChIJOXG4DzN5C0gRYGe5T0gUDAQ",
         "types" : [ "locality", "political" ]
      },
      {
         "geocoder_status" : "OK",
         "place_id" : "ChIJFcvap915C0gRtqzkDqke9Pw",
         "types" : [
            "establishment",
            "food",
            "grocery_or_supermarket",
            "point_of_interest",
            "store"
         ]
      },
      {
         "geocoder_status" : "OK",
         "place_id" : "ChIJJz6d6Ot2C0gR4vTnEaljPuU",
         "types" : [ "establishment", "natural_feature" ]
      }
   ],
   "routes" : [
      {
         "bounds" : {
            "northeast" : {
               "lat" : 49.4224992,
               "lng" : -1.1755885
            },
            "southwest" : {
               "lat" : 49.399297,
               "lng" : -1.318644
            }
         },
         "copyrights" : "Map data ©2022 Google",
         "legs" : [
            {
               "distance" : {
                  "text" : "0.4 km",
                  "value" : 363
               },
               "duration" : {
                  "text" : "2 mins",
                  "value" : 137
               },
               "end_address" : "12 Rue Général de Gaulle, 50480 Sainte-Mère-Église, France",
               "end_location" : {
                  "lat" : 49.4071878,
                  "lng" : -1.3165924
               },
               "start_address" : "50480 Sainte-Mère-Église, France",
               "start_location" : {
                  "lat" : 49.4099592,
                  "lng" : -1.3182362
               },
               "steps" : [
                  {
                     "distance" : {
                        "text" : "33 m",
                        "value" : 33
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 5
                     },
                     "end_location" : {
                        "lat" : 49.4098288,
                        "lng" : -1.318644
                     },
                     "html_instructions" : "Head \u003cb\u003esouthwest\u003c/b\u003e toward \u003cb\u003eRue du Cap de Laine\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eVoie de la Liberté\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eD974\u003c/b\u003e",
                     "polyline" : {
                        "points" : "gkqlH~m`GDNBJFZFV"
                     },
                     "start_location" : {
                        "lat" : 49.4099592,
                        "lng" : -1.3182362
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.3 km",
                        "value" : 330
                     },
                     "duration" : {
                        "text" : "2 mins",
                        "value" : 132
                     },
                     "end_location" : {
                        "lat" : 49.4071878,
                        "lng" : -1.3165924
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eRue du Cap de Laine\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eVoie de la Liberté\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eD974\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003eContinue to follow Voie de la Liberté/\u003cwbr/\u003eD974\u003c/div\u003e\u003cdiv style=\"font-size:0.9em\"\u003eDestination will be on the left\u003c/div\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "mjqlHnp`G^YTQ^YPMXU|@s@b@]RQLI|@w@PMNIVKHE`@Uv@c@TSVQ"
                     },
                     "start_location" : {
                        "lat" : 49.4098288,
                        "lng" : -1.318644
                     },
                     "travel_mode" : "BICYCLING"
                  }
               ],
               "traffic_speed_entry" : [],
               "via_waypoint" : []
            },
            {
               "distance" : {
                  "text" : "13.3 km",
                  "value" : 13316
               },
               "duration" : {
                  "text" : "40 mins",
                  "value" : 2409
               },
               "end_address" : "Utah Beach, France",
               "end_location" : {
                  "lat" : 49.4155189,
                  "lng" : -1.1756061
               },
               "start_address" : "12 Rue Général de Gaulle, 50480 Sainte-Mère-Église, France",
               "start_location" : {
                  "lat" : 49.4071878,
                  "lng" : -1.3165924
               },
               "steps" : [
                  {
                     "distance" : {
                        "text" : "0.7 km",
                        "value" : 694
                     },
                     "duration" : {
                        "text" : "2 mins",
                        "value" : 117
                     },
                     "end_location" : {
                        "lat" : 49.4030408,
                        "lng" : -1.3104933
                     },
                     "html_instructions" : "Head \u003cb\u003esoutheast\u003c/b\u003e on \u003cb\u003eRue Général de Gaulle\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eVoie de la Liberté\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eD974\u003c/b\u003e toward \u003cb\u003eImp. des Ribets\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003eContinue to follow Voie de la Liberté\u003c/div\u003e",
                     "polyline" : {
                        "points" : "}yplHtc`GpAy@f@]VQnA{@j@_@jA}@`Aq@\\Wh@_@DCj@a@TQf@_@f@]TUNUXo@^aAZ_ADMRs@Hg@Dg@Be@BkB@mA@a@Bq@Da@DY"
                     },
                     "start_location" : {
                        "lat" : 49.4071878,
                        "lng" : -1.3165924
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "4.9 km",
                        "value" : 4895
                     },
                     "duration" : {
                        "text" : "14 mins",
                        "value" : 843
                     },
                     "end_location" : {
                        "lat" : 49.4064466,
                        "lng" : -1.2500205
                     },
                     "html_instructions" : "At the roundabout, take the \u003cb\u003e2nd\u003c/b\u003e exit onto \u003cb\u003eD67\u003c/b\u003e",
                     "maneuver" : "roundabout-right",
                     "polyline" : {
                        "points" : "_`plHp}~F@?@?@?@A@?@A@??A@A@A@A?A@A?A@A?A?A@A?C?A?A?A?A?C?A?A?A?A?CAA?AAC?AAA?AA??AAA?AA?AA?AA?A?AAA?A?AAA@A?Wk@Q[y@mBAECKAI?M@I?E@M@EBEBGv@eBVw@DQLq@@EPaA@A?CRe@Zm@Ta@?A@ABOD[@Q@K?]?q@AeAGmEASCqBAy@@sADaG@sBAo@A[Co@GyAOeDO_EEoAGqAAeA?K@e@Fm@LeARiAR}@^oAf@sAPe@Zy@jAuC\\aAR{@d@kBj@uBRu@Vo@DM\\u@NWNQ\\Y|@m@ZWNUP]Je@Lw@Fk@FcA?CJmF?QAOCOESISMQQOA?QI_@SSOWa@Sa@I[E]Ge@McAIu@AY?Q@UDm@?]?O?MA[OyASuBG_@GSMUMQWUaByAIIeB_BQWUq@c@iBm@eCA?e@mBQa@a@kAMc@Ea@AU?W@S@[LwBDg@RaF@kA@kABsC?a@?OCWE_@WkACK}A}Gc@oBMw@SsA[qBo@oFGi@CYAQ?O@GBGJO@ABAh@Y@A@A@A@C?ADK?C?C?M?U?CAEQkBIwA?ECo@AQGs@Ea@Ks@Ig@EYC[AOAIC]CWAYEe@Aa@Ca@Cc@C[AUCa@AISaBe@kEAO_@}CCWE_@ASASAa@AS?_@@S?SBYBYFiAHwAN{BPeCBg@@S@KB[@Y@[@O?G@]?]?[?]?]?W?Q?K?IAQAe@E]O_AWiBWcBSqAO}@QwAUeBUwAKm@AEMg@Ok@[aAa@oAACOg@Uu@c@oB"
                     },
                     "start_location" : {
                        "lat" : 49.4030408,
                        "lng" : -1.3104933
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.6 km",
                        "value" : 632
                     },
                     "duration" : {
                        "text" : "2 mins",
                        "value" : 97
                     },
                     "end_location" : {
                        "lat" : 49.404216,
                        "lng" : -1.242117
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eD115\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "iuplHrcsFBEBI@G?C@GBMBS@I@GDMBMDKFMLWNSDIDIBCFODKBK@ADOBODQ@ODS@M@C@ULmDBc@BWD[Fc@@GJi@DUXmABKJe@Nk@t@wCXqARaAJg@h@cDPgAJq@Ba@"
                     },
                     "start_location" : {
                        "lat" : 49.4064466,
                        "lng" : -1.2500205
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.5 km",
                        "value" : 545
                     },
                     "duration" : {
                        "text" : "2 mins",
                        "value" : 133
                     },
                     "end_location" : {
                        "lat" : 49.40032249999999,
                        "lng" : -1.2379059
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eD14\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "kgplHfrqFBAFEDCHEFGR]p@aAJORWNSDEFG\\Y^[\\W`@_@RQLIHGHGJEHEJCNELCPEZAVGNGRKNMNMXSLOp@aB^_AXo@^{@Na@`@}@"
                     },
                     "start_location" : {
                        "lat" : 49.404216,
                        "lng" : -1.242117
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.4 km",
                        "value" : 424
                     },
                     "duration" : {
                        "text" : "2 mins",
                        "value" : 104
                     },
                     "end_location" : {
                        "lat" : 49.402242,
                        "lng" : -1.232856
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eLe Village de la Chaussée\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "_oolH|wpFK_@Oy@ScAS{@Ok@Uu@Uk@AAUq@Si@Uy@Ss@k@_B]gA_@oAW}@AIKa@Ki@G[EU"
                     },
                     "start_location" : {
                        "lat" : 49.40032249999999,
                        "lng" : -1.2379059
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.1 km",
                        "value" : 147
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 26
                     },
                     "end_location" : {
                        "lat" : 49.4029038,
                        "lng" : -1.2311295
                     },
                     "html_instructions" : "Continue onto \u003cb\u003eLe Beri\u003c/b\u003e",
                     "polyline" : {
                        "points" : "_{olHjxoFCSIq@G_@COAEK]IO[q@Yq@Qm@I]"
                     },
                     "start_location" : {
                        "lat" : 49.402242,
                        "lng" : -1.232856
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.3 km",
                        "value" : 314
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 60
                     },
                     "end_location" : {
                        "lat" : 49.4043985,
                        "lng" : -1.2274555
                     },
                     "html_instructions" : "Continue onto \u003cb\u003eLes Hergueries\u003c/b\u003e",
                     "polyline" : {
                        "points" : "c_plHpmoFOa@U{@K_@Y_Ao@uBa@oA]cAQm@Qs@CI[_AOi@M_@M_@"
                     },
                     "start_location" : {
                        "lat" : 49.4029038,
                        "lng" : -1.2311295
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.5 km",
                        "value" : 456
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 67
                     },
                     "end_location" : {
                        "lat" : 49.4041528,
                        "lng" : -1.221182
                     },
                     "html_instructions" : "Continue onto \u003cb\u003eVge de la Rivière\u003c/b\u003e",
                     "polyline" : {
                        "points" : "ohplHrvnFEa@Aa@As@?m@?I@gAB{BDqA@i@@WBw@H_B@g@Ba@@a@@_@@a@@i@BgC@o@@gA?U@S@U?WBW"
                     },
                     "start_location" : {
                        "lat" : 49.4043985,
                        "lng" : -1.2274555
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.1 km",
                        "value" : 107
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 25
                     },
                     "end_location" : {
                        "lat" : 49.40392259999999,
                        "lng" : -1.2197424
                     },
                     "html_instructions" : "Continue onto \u003cb\u003eLa Rivière\u003c/b\u003e",
                     "polyline" : {
                        "points" : "}fplHjomFBUHeAFi@Fi@Dg@BS@SB_@"
                     },
                     "start_location" : {
                        "lat" : 49.4041528,
                        "lng" : -1.221182
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "3.1 km",
                        "value" : 3111
                     },
                     "duration" : {
                        "text" : "9 mins",
                        "value" : 529
                     },
                     "end_location" : {
                        "lat" : 49.4224992,
                        "lng" : -1.1907933
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eLe Grand Hard\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "oeplHjfmFOMGEKEICICAAOCKCMAKAK?O?K@M?M@O@C?E?M?MAQCQEGAYESIQEOGOKQKk@k@mAoAw@{@k@g@AAGEOMQIGCKEWKWM_@Wa@Wg@_@wAgAqAcA_Aw@iAcAo@i@CAQKg@][WGI[[SUIKIGOGSKWQy@w@?A_@[[Y_@USOMKKKIMEGEIEMIUEMEOEKWy@}@aDg@kBk@kB]cAOc@CMAO?I?K@K?KAIEk@W}BCU?CEWCOEKGKIOKKIOO_@u@wBk@iB_@qAAC[mAUcAKo@qDaOGOCEECEAIAOAgBCI?G?C?GAGECCWWKQOQOYQ_@{@iB]u@i@iAEKCKEQSgAKu@Oa@u@kBu@mBg@eAUg@ACIMIKUe@[q@OWAAKQMSMOMOKQKSKWYw@EMEKIYIOIMMOKMKMGKIQUk@EO[gAwAmGg@wBqAeFaB}GI[WaA"
                     },
                     "start_location" : {
                        "lat" : 49.40392259999999,
                        "lng" : -1.2197424
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.6 km",
                        "value" : 627
                     },
                     "duration" : {
                        "text" : "2 mins",
                        "value" : 113
                     },
                     "end_location" : {
                        "lat" : 49.4175171,
                        "lng" : -1.1869698
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eLa Grande Dune\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "syslHlqgFVQXO\\MHC\\Kl@K`@Kh@S`@MHE|@_@z@]b@Q@ARMd@]@?p@k@h@c@FG\\[DCp@s@pAyA|@cAd@i@?ABC`AkAr@w@"
                     },
                     "start_location" : {
                        "lat" : 49.4224992,
                        "lng" : -1.1907933
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.6 km",
                        "value" : 577
                     },
                     "duration" : {
                        "text" : "2 mins",
                        "value" : 111
                     },
                     "end_location" : {
                        "lat" : 49.4201255,
                        "lng" : -1.1800731
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eLa Madeleine\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "ozrlHpyfFIYa@uAu@kC]cAa@{AM]GUOo@Og@WaAEOWaAI_@WaAK_@Ka@U}@Qo@CIQk@Og@Qo@Mc@a@yAEQOo@AEYaA"
                     },
                     "start_location" : {
                        "lat" : 49.4175171,
                        "lng" : -1.1869698
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.7 km",
                        "value" : 683
                     },
                     "duration" : {
                        "text" : "2 mins",
                        "value" : 145
                     },
                     "end_location" : {
                        "lat" : 49.415042,
                        "lng" : -1.1768156
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eLa Grande Dune\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eD421\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "yjslHlneFTSd@i@jAgAfAeAhAeATU^[tAqArCmCnBmBHEDABAB?B?B@D@BBDDDDDD@Fh@rBBHBFDBDBDBF?D?DAHCbA_AXUfA{@HI"
                     },
                     "start_location" : {
                        "lat" : 49.4201255,
                        "lng" : -1.1800731
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.1 km",
                        "value" : 102
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 39
                     },
                     "end_location" : {
                        "lat" : 49.4154999,
                        "lng" : -1.1755885
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "_krlHbzdF{AuF"
                     },
                     "start_location" : {
                        "lat" : 49.415042,
                        "lng" : -1.1768156
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "2 m",
                        "value" : 2
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 0
                     },
                     "end_location" : {
                        "lat" : 49.4155189,
                        "lng" : -1.1756061
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003eDestination will be on the right\u003c/div\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "{mrlHlrdFCB"
                     },
                     "start_location" : {
                        "lat" : 49.4154999,
                        "lng" : -1.1755885
                     },
                     "travel_mode" : "BICYCLING"
                  }
               ],
               "traffic_speed_entry" : [],
               "via_waypoint" : []
            }
         ],
         "overview_polyline" : {
            "points" : "gkqlH~m`GXnAfBsAlFiErAq@vDcCzDkCtEgDnBwA|@s@h@eAz@aCXaANoAFqCBoBHsAFYJEHM@QASGOKEE?eBuDEQAWDc@FMv@eBVw@RcARgA@En@sATc@DQFm@@i@AwBIaFEkDFuI?cDEkAm@oOIwC@q@TsBf@gCfAcDl@_BhBwEx@gD~@kD\\}@l@mAl@k@xAeA`@s@X}ANoBJqFAa@Ic@We@SOq@]k@q@]}@e@}DAk@FcAAwAc@oEOs@[g@yBoBoBiBQWUq@qAoFg@mBs@mBSeAAm@Bo@R_DRaF@kAD_F?q@Iw@[wAaCmKa@kCkAaJKcAAa@DOLQl@[DEFU?k@SqBI}AEaAMuA_@qCKoA[{F}@gIk@iFEiBH{A~@gODmA@uB?sAA[GcAsA_JmAsI[{AoAaEe@}Ac@oBBEDQ@KJs@Vu@h@_ATk@Ps@Ju@V_GZqBn@uCdAcEl@sCt@kE\\yBFc@LIPMdA_Bt@aAbBuAlAcAj@W\\Il@Gf@Ob@Yh@a@LOp@aBx@oBn@}A`@}@K_@c@}Bc@gBk@aBWs@i@cB_AsC}@wCq@sC[wBYsAe@aAYq@Qm@Y_Aa@{AkBeGeAoDgAiDGcAAaB@qAHmEPyEHkCHcGDgCPkCXoCDs@WSa@Ou@Ku@@g@B[Ac@IgAW_@S}@w@qDsDk@_@cAc@aAo@_CgBqC{BiAcAmBuAsAsASSc@SqAiA_@]}AkAUYKQ[aAcCsIiAoDSq@?q@AU]iDMaAc@s@Yo@aBaFa@uAq@qCKo@qDaOKUKEYC}BCOG[[[c@a@y@iCuFi@{CeAmC}AsDWk@SYcAqBu@eAWe@e@oA_@cAo@y@Q][{@[gAwAmGyB}IkByHWaAVQv@]f@OnAWjAa@fDuA|@m@`CsBfEuEjB{Br@w@IYwAaFuAsE}@iD}B}IaAgDy@aDYaATSpBqBfE}DbJsIPCRLJJj@zBFPJFLBJAlAcA`BqAHI{AuFCB"
         },
         "summary" : "Voie de la Liberté/D974",
         "warnings" : [
            "Bicycling directions are in beta. Use caution – This route may contain streets that aren't suited for bicycling."
         ],
         "waypoint_order" : [ 0 ]
      }
   ],
   "status" : "OK"
}
____
## Rubric

This is part of your first practical lab in Week 3 

1. A working URL properly documented in the MarkDown with a unique origin and destination earns 50%
2. Including one to four additional functioning unique parameters from the API earns 50-70%
3. Having 3 or more functioning unique/novel and well-thought out parameters from the API earns 70-90%
4. Including more than 2 "stops", including links to display PlaceIDs on Google Maps, or other innovative presentations earns 80%-100%. 
