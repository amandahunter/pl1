# My personal directions request

First, explore the various options through the Directions API https://developers.google.com/maps/documentation/directions/get-directions. 

Be creative and use multiple parameters from the API documentation to earn a top grade. The rubric is listed in the bottom of the MarkDown document. 

> Tip: Can't make changes? GitHub previews MD documents by default (read-only). Start editing to make the changes for your URL and JSON response below


 -->
## Directions URL

<!-- I chose the starting point for our journey to be Utah Beach. My favourite way to travel in Europe is to visit museums and snack, and then visit museums again (Cosmopolitan at heart). So here we start at the beach, and make a bicycle journey visiting specific DDday locations (primarily Utah Beach and the town of Saint-Mere Eglise), being sure to maintain our strength with cheese and bread (when in France). There was a paratrooper who landed and was stuck on the church in this town, his company sent in to secure this town while a larger offensive took place on Utah Beach. He was stuck there for hours playing dead as he could not break free. The church he was stuck on is our final destination on our lovely day trip through Normandie. -->
```


https://maps.googleapis.com/maps/api/directions/json?origin=place_id:ChIJJz6d6Ot2C0gR4vTnEaljPuU&destination=place_id:ChIJd0xVKDB5C0gRinmSQU0Qruo&waypoints=place_id:ChIJ_4e_1fJ3C0gR9mGz8GNPwcg|place_id:ChIJFcvap915C0gRtqzkDqke9Pw|place_id:ChIJcWrxNC55C0gRD8E2YsDZi28|place_id:ChIJKzFJ4C95C0gRSeMkpcgIpYw&avoid=tolls%3Ahighways%3Aferries&mode=bicycling&units=metric&key=AIzaSyCM-WWHYHIKY-do4kquMy9Z4wQaQx51AuE

```
<!--I put this geocode link below, which helped me get my place id for my origin and destination-->

https://maps.googleapis.com/maps/api/geocode/json?address=Utah+Beach&key=AIzaSyCM-WWHYHIKY-do4kquMy9Z4wQaQx51AuE
https://maps.googleapis.com/maps/api/geocode/json?address=Church%20of%20Sainte-M%C3%A8re-%C3%89glise,%20Rue%20Koenig,%20Sainte-M%C3%A8re-%C3%89glise,%20France&key=AIzaSyCM-WWHYHIKY-do4kquMy9Z4wQaQx51AuE


<!--links to the two museums we shall visit-->
https://maps.googleapis.com/maps/api/geocode/json?address=Utah%20Beach%20Landing%20Museum,%20La%20Madeleine,%20Sainte-Marie-du-Mont,%20France&key=AIzaSyCM-WWHYHIKY-do4kquMy9Z4wQaQx51AuE

https://maps.googleapis.com/maps/api/geocode/json?address=Airborne%20Museum,%20Rue%20Eisenhower,%20Sainte-M%C3%A8re-%C3%89glise,%20France&key=AIzaSyCM-WWHYHIKY-do4kquMy9Z4wQaQx51AuE


<!--I did this search to find a nearby cheese shop? Bc France. -->

https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=49.4099592,-1.3182362&radius=500&type=store&keyword=fromagerie&key=AIzaSyCM-WWHYHIKY-do4kquMy9Z4wQaQx51AuE

<!--I did this search to find a nearby bakery, with very close proximity to the cheese, for obvious purposes, we just finished biking 10km and need sustainance-->

https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=49.4072225,-1.3164781&radius=20&type=store&keyword=boulangerie&key=AIzaSyCM-WWHYHIKY-do4kquMy9Z4wQaQx51AuE

## Next paste the full JSON response to this query here:
{
   "geocoded_waypoints" : [
      {
         "geocoder_status" : "OK",
         "place_id" : "ChIJJz6d6Ot2C0gR4vTnEaljPuU",
         "types" : [ "establishment", "natural_feature" ]
      },
      {
         "geocoder_status" : "OK",
         "place_id" : "ChIJ_4e_1fJ3C0gR9mGz8GNPwcg",
         "types" : [ "establishment", "museum", "point_of_interest", "tourist_attraction" ]
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
         "place_id" : "ChIJcWrxNC55C0gRD8E2YsDZi28",
         "types" : [ "bakery", "establishment", "food", "point_of_interest", "store" ]
      },
      {
         "geocoder_status" : "OK",
         "place_id" : "ChIJKzFJ4C95C0gRSeMkpcgIpYw",
         "types" : [ "establishment", "museum", "point_of_interest", "tourist_attraction" ]
      },
      {
         "geocoder_status" : "OK",
         "place_id" : "ChIJd0xVKDB5C0gRinmSQU0Qruo",
         "types" : [ "church", "establishment", "place_of_worship", "point_of_interest" ]
      }
   ],
   "routes" : [
      {
         "bounds" : {
            "northeast" : {
               "lat" : 49.4289095,
               "lng" : -1.1749885
            },
            "southwest" : {
               "lat" : 49.4071878,
               "lng" : -1.3176138
            }
         },
         "copyrights" : "Map data ©2022 Google",
         "legs" : [
            {
               "distance" : {
                  "text" : "59 m",
                  "value" : 59
               },
               "duration" : {
                  "text" : "1 min",
                  "value" : 10
               },
               "end_address" : "La Madeleine, 50480 Sainte-Marie-du-Mont, France",
               "end_location" : {
                  "lat" : 49.4152863,
                  "lng" : -1.1749885
               },
               "start_address" : "Utah Beach, France",
               "start_location" : {
                  "lat" : 49.4155189,
                  "lng" : -1.1756061
               },
               "steps" : [
                  {
                     "distance" : {
                        "text" : "20 m",
                        "value" : 20
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 3
                     },
                     "end_location" : {
                        "lat" : 49.4153677,
                        "lng" : -1.1754694
                     },
                     "html_instructions" : "Head \u003cb\u003esoutheast\u003c/b\u003e",
                     "polyline" : {
                        "points" : "_nrlHprdFBCXW"
                     },
                     "start_location" : {
                        "lat" : 49.4155189,
                        "lng" : -1.1756061
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "39 m",
                        "value" : 39
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 7
                     },
                     "end_location" : {
                        "lat" : 49.4152863,
                        "lng" : -1.1749885
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003eDestination will be on the left\u003c/div\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "amrlHtqdF?}@@O?C@C@AHG"
                     },
                     "start_location" : {
                        "lat" : 49.4153677,
                        "lng" : -1.1754694
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
                  "value" : 13268
               },
               "duration" : {
                  "text" : "43 mins",
                  "value" : 2562
               },
               "end_address" : "12 Rue Général de Gaulle, 50480 Sainte-Mère-Église, France",
               "end_location" : {
                  "lat" : 49.4071878,
                  "lng" : -1.3165924
               },
               "start_address" : "La Madeleine, 50480 Sainte-Marie-du-Mont, France",
               "start_location" : {
                  "lat" : 49.4152863,
                  "lng" : -1.1749885
               },
               "steps" : [
                  {
                     "distance" : {
                        "text" : "39 m",
                        "value" : 39
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 6
                     },
                     "end_location" : {
                        "lat" : 49.4153677,
                        "lng" : -1.1754694
                     },
                     "html_instructions" : "Head \u003cb\u003enorthwest\u003c/b\u003e",
                     "polyline" : {
                        "points" : "qlrlHtndFIFA@AB?BAN?|@"
                     },
                     "start_location" : {
                        "lat" : 49.4152863,
                        "lng" : -1.1749885
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "59 m",
                        "value" : 59
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 10
                     },
                     "end_location" : {
                        "lat" : 49.4158213,
                        "lng" : -1.1758874
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e toward \u003cb\u003eLa Grande Dune\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eD421\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "amrlHtqdFYV_Az@"
                     },
                     "start_location" : {
                        "lat" : 49.4153677,
                        "lng" : -1.1754694
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.1 km",
                        "value" : 101
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 18
                     },
                     "end_location" : {
                        "lat" : 49.4154475,
                        "lng" : -1.1771654
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e toward \u003cb\u003eLa Grande Dune\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eD421\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "{orlHhtdFbAbFBJ@N"
                     },
                     "start_location" : {
                        "lat" : 49.4158213,
                        "lng" : -1.1758874
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "1.9 km",
                        "value" : 1914
                     },
                     "duration" : {
                        "text" : "6 mins",
                        "value" : 358
                     },
                     "end_location" : {
                        "lat" : 49.4289095,
                        "lng" : -1.19105
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eLa Grande Dune\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eD421\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003eContinue to follow D421\u003c/div\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "qmrlHh|dFYTcA~@IBE@E?G?ECECECCGCIi@sBAGEEEEEECCEACAC?C?C@E@IDoBlBsClCuApA_@ZUTiAdAgAdAkAfAe@h@URIJ[^[d@}@rAm@z@iAdBWZOPcAbA}ApAoAdASPEBWZMLgBnBIHmArAcDnDCBoEdFg@h@q@t@}C|CaA|@MLq@n@a@d@Yb@Ud@Wn@Wp@Ux@ERMl@QlAIl@Gd@Gn@"
                     },
                     "start_location" : {
                        "lat" : 49.4154475,
                        "lng" : -1.1771654
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "1.0 km",
                        "value" : 1011
                     },
                     "duration" : {
                        "text" : "3 mins",
                        "value" : 183
                     },
                     "end_location" : {
                        "lat" : 49.42418499999999,
                        "lng" : -1.202855
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eLa Redoute\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eD67\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003eContinue to follow D67\u003c/div\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "uaulH`sgFJTFXFTLXJRRh@~@jBn@lAh@lAPd@lCbHlAdD`@hA`@jAR~@Nn@^fBFZl@~Cd@hCLz@j@bDf@jCH\\Jj@Rt@DPTh@Vf@LVFNDNNt@Np@"
                     },
                     "start_location" : {
                        "lat" : 49.4289095,
                        "lng" : -1.19105
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.6 km",
                        "value" : 613
                     },
                     "duration" : {
                        "text" : "2 mins",
                        "value" : 108
                     },
                     "end_location" : {
                        "lat" : 49.4288416,
                        "lng" : -1.2073172
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eLe Château de la Contrée\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "cdtlHz|iF_@b@[\\q@l@q@`@cAd@mAj@}@n@q@l@y@|@_CnC_@`@a@d@}CjDs@x@g@n@KL"
                     },
                     "start_location" : {
                        "lat" : 49.42418499999999,
                        "lng" : -1.202855
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "1.7 km",
                        "value" : 1723
                     },
                     "duration" : {
                        "text" : "5 mins",
                        "value" : 300
                     },
                     "end_location" : {
                        "lat" : 49.4233202,
                        "lng" : -1.2286557
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "gaulHvxjFh@vAh@tA@@zBnG~@dCn@bBj@dA@BXX@@TPFHX`@n@hAf@`ARj@n@nB@Dj@vBVfA^bB@Ft@nDVbA`@pATt@Ld@P|@LpBDp@HpAPdCDh@B|ADlBFnAVfE\\lF@N?TETI`@A^@d@TfEThEB\\PtB`@jE@BL|AHhA?P@T?RCPCLEL"
                     },
                     "start_location" : {
                        "lat" : 49.4288416,
                        "lng" : -1.2073172
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.2 km",
                        "value" : 188
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 34
                     },
                     "end_location" : {
                        "lat" : 49.4249518,
                        "lng" : -1.2289519
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eLa Vallée\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "w~slHb~nFSEQAO@c@Bg@@SCQCSCW?YDQDYLSPWX"
                     },
                     "start_location" : {
                        "lat" : 49.4233202,
                        "lng" : -1.2286557
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.5 km",
                        "value" : 522
                     },
                     "duration" : {
                        "text" : "2 mins",
                        "value" : 101
                     },
                     "end_location" : {
                        "lat" : 49.42688340000001,
                        "lng" : -1.2348148
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "}htlH|_oFL`AVrBPxAB\\AXETGVA?kAnBs@nACD{AbCu@hAABADAFAD?BADOb@]hAi@pBc@fBELIP"
                     },
                     "start_location" : {
                        "lat" : 49.4249518,
                        "lng" : -1.2289519
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "42 m",
                        "value" : 42
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 18
                     },
                     "end_location" : {
                        "lat" : 49.42713999999999,
                        "lng" : -1.235234
                     },
                     "html_instructions" : "Continue onto \u003cb\u003eHam. de l'Église\u003c/b\u003e",
                     "polyline" : {
                        "points" : "_utlHpdpFCLKNUZMX"
                     },
                     "start_location" : {
                        "lat" : 49.42688340000001,
                        "lng" : -1.2348148
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.2 km",
                        "value" : 153
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 73
                     },
                     "end_location" : {
                        "lat" : 49.4267182,
                        "lng" : -1.2371799
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e to stay on \u003cb\u003eHam. de l'Église\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "svtlHdgpF?N@FDRFZP\\JTP\\?H?D@JBJ@h@FtA?RBn@"
                     },
                     "start_location" : {
                        "lat" : 49.42713999999999,
                        "lng" : -1.235234
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "2.8 km",
                        "value" : 2804
                     },
                     "duration" : {
                        "text" : "9 mins",
                        "value" : 562
                     },
                     "end_location" : {
                        "lat" : 49.41792969999999,
                        "lng" : -1.271724
                     },
                     "html_instructions" : "Continue straight onto \u003cb\u003eCriss Road\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eLa Croix aux Bertots\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eD423\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003eContinue to follow D423\u003c/div\u003e",
                     "maneuver" : "straight",
                     "polyline" : {
                        "points" : "_ttlHjspFEhAAbAA\\OpEOrEE`B?DCvB@vCBxB@`B@X?~DDdCHpB?r@An@Ch@@d@Bb@RrABN@H@FBPNp@BLX`BJh@F^NnBRhBNbAV~Ah@jBn@|A^bA^pAd@~BRvANzA@@NjA@D@FT|@?@v@hCRn@`@tAx@rCDLt@|A`AxBX`AVxA@J?L@NBX@d@RdBV~B@JXzB\\jBBLf@rCl@|CJh@@FVvBDf@RdCf@pEn@nFBNDXHb@BF@JDJTl@@B?@@?BFhCbEHN@@@BFHFNFN@DHXHR\\x@f@t@d@p@HHj@n@RT\\\\\\\\p@t@FJZb@Xd@@BLRHP"
                     },
                     "start_location" : {
                        "lat" : 49.4267182,
                        "lng" : -1.2371799
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.5 km",
                        "value" : 469
                     },
                     "duration" : {
                        "text" : "2 mins",
                        "value" : 94
                     },
                     "end_location" : {
                        "lat" : 49.4142532,
                        "lng" : -1.2748545
                     },
                     "html_instructions" : "Continue straight onto \u003cb\u003eRue de la Croix Baron\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eD129\u003c/b\u003e",
                     "maneuver" : "straight",
                     "polyline" : {
                        "points" : "a}rlHfkwFl@r@lAzAl@h@f@ZTPHDz@j@t@l@v@n@xAvADDr@j@z@j@p@b@NHZNTD"
                     },
                     "start_location" : {
                        "lat" : 49.41792969999999,
                        "lng" : -1.271724
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.6 km",
                        "value" : 609
                     },
                     "duration" : {
                        "text" : "2 mins",
                        "value" : 129
                     },
                     "end_location" : {
                        "lat" : 49.415928,
                        "lng" : -1.282398
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eRue de Reuville\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "afrlHx~wFM`@IXSnAAFY|AEVEZM|@KdAC`@?d@D`AD\\Dx@@DDn@@X?x@E`ACLG`@Sd@a@p@_@f@Y`@A@i@|@M^AFALBx@?L?NANEP[nAMr@KfA"
                     },
                     "start_location" : {
                        "lat" : 49.4142532,
                        "lng" : -1.2748545
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.4 km",
                        "value" : 378
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 66
                     },
                     "end_location" : {
                        "lat" : 49.4159425,
                        "lng" : -1.2873801
                     },
                     "html_instructions" : "Continue onto \u003cb\u003eRte des Marronniers\u003c/b\u003e",
                     "polyline" : {
                        "points" : "qprlH~myFIn@GVI^Wx@CN?HAL@T`@fBLr@@PD^BjA?BDrA@TLbB?b@@j@Cj@Gp@Gt@ABGn@"
                     },
                     "start_location" : {
                        "lat" : 49.415928,
                        "lng" : -1.282398
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "1.8 km",
                        "value" : 1796
                     },
                     "duration" : {
                        "text" : "5 mins",
                        "value" : 287
                     },
                     "end_location" : {
                        "lat" : 49.412572,
                        "lng" : -1.310896
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eRte de Saint-Martin\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eD423\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "sprlHbmzFXv@T~@N|@HlAPrDLfCDt@H~AVnDDt@@Hf@bGBVJvABr@?T?TCXAHAZIb@YxAKf@k@nCWhAGb@Cf@Ah@?l@@^Fh@Hl@`@vAXpABTLr@?DJl@XrBv@xF@@TdBVfBPhAv@bGPdARnA@HPz@ThAt@~C@B`@lBThABLNjAJtALdBFh@T|CL`BBd@AZ?Z?T"
                     },
                     "start_location" : {
                        "lat" : 49.4159425,
                        "lng" : -1.2873801
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.4 km",
                        "value" : 449
                     },
                     "duration" : {
                        "text" : "2 mins",
                        "value" : 97
                     },
                     "end_location" : {
                        "lat" : 49.4094516,
                        "lng" : -1.3148161
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eRue Général Gavin\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eD17\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "q{qlHb`_GdAnAn@x@Zd@hAxAJNjA~ADFv@dAb@p@b@r@LPJPb@t@l@r@FFRZNPDBLNHH"
                     },
                     "start_location" : {
                        "lat" : 49.412572,
                        "lng" : -1.310896
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "39 m",
                        "value" : 39
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 32
                     },
                     "end_location" : {
                        "lat" : 49.4092132,
                        "lng" : -1.3144303
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eRue de la Liberté\u003c/b\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "ahqlHrx_GT_@DKLUDK"
                     },
                     "start_location" : {
                        "lat" : 49.4094516,
                        "lng" : -1.3148161
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.3 km",
                        "value" : 256
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 37
                     },
                     "end_location" : {
                        "lat" : 49.4080352,
                        "lng" : -1.3171595
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eRue Eisenhower\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "qfqlHdv_GXhADH@BBBB@D?F?JCVEH`@Lf@Nv@DJPt@Lp@TdAVnADTDTDT"
                     },
                     "start_location" : {
                        "lat" : 49.4092132,
                        "lng" : -1.3144303
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.1 km",
                        "value" : 103
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 49
                     },
                     "end_location" : {
                        "lat" : 49.4071878,
                        "lng" : -1.3165924
                     },
                     "html_instructions" : "Turn \u003cb\u003eleft\u003c/b\u003e onto \u003cb\u003eRue Général de Gaulle\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eVoie de la Liberté\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eD974\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003eDestination will be on the left\u003c/div\u003e",
                     "maneuver" : "turn-left",
                     "polyline" : {
                        "points" : "g_qlHfg`GVKHE`@Uv@c@TSVQ"
                     },
                     "start_location" : {
                        "lat" : 49.4080352,
                        "lng" : -1.3171595
                     },
                     "travel_mode" : "BICYCLING"
                  }
               ],
               "traffic_speed_entry" : [],
               "via_waypoint" : []
            },
            {
               "distance" : {
                  "text" : "84 m",
                  "value" : 84
               },
               "duration" : {
                  "text" : "1 min",
                  "value" : 15
               },
               "end_address" : "24 Rue Général de Gaulle, 50480 Sainte-Mère-Église, France",
               "end_location" : {
                  "lat" : 49.4078737,
                  "lng" : -1.3170739
               },
               "start_address" : "12 Rue Général de Gaulle, 50480 Sainte-Mère-Église, France",
               "start_location" : {
                  "lat" : 49.4071878,
                  "lng" : -1.3165924
               },
               "steps" : [
                  {
                     "distance" : {
                        "text" : "84 m",
                        "value" : 84
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 15
                     },
                     "end_location" : {
                        "lat" : 49.4078737,
                        "lng" : -1.3170739
                     },
                     "html_instructions" : "Head \u003cb\u003enorthwest\u003c/b\u003e on \u003cb\u003eRue Général de Gaulle\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eVoie de la Liberté\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eD974\u003c/b\u003e toward \u003cb\u003eImpasse Notre Dame\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eImp. Bob Murphy\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003eDestination will be on the right\u003c/div\u003e",
                     "polyline" : {
                        "points" : "}yplHtc`GWPURw@b@a@T"
                     },
                     "start_location" : {
                        "lat" : 49.4071878,
                        "lng" : -1.3165924
                     },
                     "travel_mode" : "BICYCLING"
                  }
               ],
               "traffic_speed_entry" : [],
               "via_waypoint" : []
            },
            {
               "distance" : {
                  "text" : "0.2 km",
                  "value" : 170
               },
               "duration" : {
                  "text" : "1 min",
                  "value" : 34
               },
               "end_address" : "14 Rue Eisenhower, 50480 Sainte-Mère-Église, France",
               "end_location" : {
                  "lat" : 49.40861599999999,
                  "lng" : -1.3152786
               },
               "start_address" : "24 Rue Général de Gaulle, 50480 Sainte-Mère-Église, France",
               "start_location" : {
                  "lat" : 49.4078737,
                  "lng" : -1.3170739
               },
               "steps" : [
                  {
                     "distance" : {
                        "text" : "19 m",
                        "value" : 19
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 3
                     },
                     "end_location" : {
                        "lat" : 49.4080352,
                        "lng" : -1.3171595
                     },
                     "html_instructions" : "Head \u003cb\u003enorth\u003c/b\u003e on \u003cb\u003eRue Général de Gaulle\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eVoie de la Liberté\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eD974\u003c/b\u003e toward \u003cb\u003eRue Eisenhower\u003c/b\u003e",
                     "polyline" : {
                        "points" : "e~plHtf`GIDWJ"
                     },
                     "start_location" : {
                        "lat" : 49.4078737,
                        "lng" : -1.3170739
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.2 km",
                        "value" : 151
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 31
                     },
                     "end_location" : {
                        "lat" : 49.40861599999999,
                        "lng" : -1.3152786
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eRue Eisenhower\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003eDestination will be on the right\u003c/div\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "g_qlHfg`GEUEUEUWoAUeAMq@Qu@EKMk@"
                     },
                     "start_location" : {
                        "lat" : 49.4080352,
                        "lng" : -1.3171595
                     },
                     "travel_mode" : "BICYCLING"
                  }
               ],
               "traffic_speed_entry" : [],
               "via_waypoint" : []
            },
            {
               "distance" : {
                  "text" : "0.3 km",
                  "value" : 316
               },
               "duration" : {
                  "text" : "1 min",
                  "value" : 79
               },
               "end_address" : "Rue Koenig, 50480 Sainte-Mère-Église, France",
               "end_location" : {
                  "lat" : 49.4089735,
                  "lng" : -1.3164502
               },
               "start_address" : "14 Rue Eisenhower, 50480 Sainte-Mère-Église, France",
               "start_location" : {
                  "lat" : 49.40861599999999,
                  "lng" : -1.3152786
               },
               "steps" : [
                  {
                     "distance" : {
                        "text" : "0.2 km",
                        "value" : 151
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 20
                     },
                     "end_location" : {
                        "lat" : 49.4080352,
                        "lng" : -1.3171595
                     },
                     "html_instructions" : "Head \u003cb\u003esouthwest\u003c/b\u003e on \u003cb\u003eRue Eisenhower\u003c/b\u003e toward \u003cb\u003eRue Général de Gaulle\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eVoie de la Liberté\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eD974\u003c/b\u003e",
                     "polyline" : {
                        "points" : "{bqlHn{_GLj@DJPt@Lp@TdAVnADTDTDT"
                     },
                     "start_location" : {
                        "lat" : 49.40861599999999,
                        "lng" : -1.3152786
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "70 m",
                        "value" : 70
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 34
                     },
                     "end_location" : {
                        "lat" : 49.4085859,
                        "lng" : -1.3176138
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eRue Général de Gaulle\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eVoie de la Liberté\u003c/b\u003e/\u003cwbr/\u003e\u003cb\u003eD974\u003c/b\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "g_qlHfg`GOHQL}@v@MH"
                     },
                     "start_location" : {
                        "lat" : 49.4080352,
                        "lng" : -1.3171595
                     },
                     "travel_mode" : "BICYCLING"
                  },
                  {
                     "distance" : {
                        "text" : "0.1 km",
                        "value" : 95
                     },
                     "duration" : {
                        "text" : "1 min",
                        "value" : 25
                     },
                     "end_location" : {
                        "lat" : 49.4089735,
                        "lng" : -1.3164502
                     },
                     "html_instructions" : "Turn \u003cb\u003eright\u003c/b\u003e onto \u003cb\u003eRue Général Koenig\u003c/b\u003e\u003cdiv style=\"font-size:0.9em\"\u003eDestination will be on the right\u003c/div\u003e",
                     "maneuver" : "turn-right",
                     "polyline" : {
                        "points" : "ubqlH`j`GK_@Ss@YwAQ{@"
                     },
                     "start_location" : {
                        "lat" : 49.4085859,
                        "lng" : -1.3176138
                     },
                     "travel_mode" : "BICYCLING"
                  }
               ],
               "traffic_speed_entry" : [],
               "via_waypoint" : []
            }
         ],
         "overview_polyline" : {
            "points" : "_nrlHprdF\\[@mA@GJIKHAFAlAyArAfAnF@NYTmAbAK@MCKGGQk@{BUUQCIByBrB_HpGqCjCqBpB_@^w@dAkBnCaB`CsAtAmDvC_A~@cJ|JmHhI_HxG{@hAm@tAm@jBS`A[zBOtAh@~A^|@nBxDz@rBzEhMbAtCb@nBf@bCrAhHx@~Ep@hD^`BZz@d@~@L^^fB{@`Aq@l@q@`@qCpAoB|AyDlEsGlHs@|@rAlD|BpGnBhFl@hAZZ\\ZX`@n@hAz@lBp@tBbA~D`@jBlArFv@fC^bBRbDZvEHfCDlBFnAt@tL@d@Ov@?dAj@pKx@bJVfD@f@Cd@IZe@Gs@Dg@@SCe@Gq@Dk@Rk@j@d@tDTvBGn@IV_C~DwCvEEVyAdFi@tBM^a@j@MX?NFZFZP\\\\r@?NDVH~BBbAGlCg@dPC|BDpGBzB?~DDdCHdDExADhAVbBVtAp@xDb@xEf@bDh@jBn@|A^bA^pAd@~BRvAP|APpAVdAlBpG~@`DvBvEX`AVxA@XDh@TjCXjCv@fFdBhJX~BXlD`BjNTbAXr@xC|EXl@J^f@lAlAfBt@x@nApAx@`At@hANVv@dAlAzAl@h@|@l@dAp@lB|A~A|Ar@j@z@j@`Al@p@TWz@UvAs@nEOfB?d@D`AJvAFt@@rAInAG`@Sd@aAxA[b@i@|@M^CTBfAA^a@`BMr@KfAQfAa@xACX?b@n@zCJ`CFhBLfCAvAOfBIr@n@vBN|@HlA^zHl@zJx@|JBhACn@Cd@c@|Bw@vD_@lBEpA@lAPvAz@hD\\|B|Ep]TxAf@dCv@bDv@vDRxAXzDn@nIAv@?TdAnAjA~AtAhBlD~E`BlCxAhBRRHHT_@Ra@DKXhAFLFDL?b@Il@lClA|FJj@DTVKj@[lAw@VQWPmAv@cAf@i@qC{@yDMk@Lj@V`A`A|EJj@a@VkA`A_@sAk@sC"
         },
         "summary" : "",
         "warnings" : [
            "Bicycling directions are in beta. Use caution – This route may contain streets that aren't suited for bicycling."
         ],
         "waypoint_order" : [ 0, 1, 2, 3 ]
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

ChIJ_4e_1fJ3C0gR9mGz8GNPwcg  utah memorial 
ChIJKzFJ4C95C0gRSeMkpcgIpYw airborne museum


