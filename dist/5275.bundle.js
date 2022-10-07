"use strict";(self.webpackChunkyals=self.webpackChunkyals||[]).push([[5275],{35275:(e,l,t)=>{t.r(l),t.d(l,{default:()=>g});var n=t(67294),a=t(46962),r=t(81391),c=t(59044),o=t(87398),u=t(68947),s=t(12050),i=t(9167),m=t(37550),E=[{label:n.createElement(n.Fragment,null,n.createElement(i.B,null,"latitude"),n.createElement(i.cJ,null),"Holds the user location's ",n.createElement(i.B,null,"latitude")," value in degrees.")},{label:n.createElement(n.Fragment,null,n.createElement(i.B,null,"longitude"),n.createElement(i.cJ,null),"Holds the user location's ",n.createElement(i.B,null,"longitude")," value in degrees.")},{label:n.createElement(n.Fragment,null,n.createElement(i.B,null,"altitude"),n.createElement(i.cJ,null),"This represents the user position's ",n.createElement(i.B,null,"altitude")," in ",n.createElement(i.I,null,"meters"),", relative to sea level.")},{label:n.createElement(n.Fragment,null,n.createElement(i.B,null,"accuracy"),n.createElement(i.cJ,null),"This represents the accuracy of the ",n.createElement(i.I,null,"latitude")," and ",n.createElement(i.I,null,"longitude"),n.createElement(s.Z,null)," in ",n.createElement(i.I,null,"meters"),".")},{label:n.createElement(n.Fragment,null,n.createElement(i.B,null,"altitudeAccuracy"),n.createElement(i.cJ,null),"This represents the accuracy of the ",n.createElement(i.I,null,"altitude")," in ",n.createElement(i.I,null,"meters"),".")},{label:n.createElement(n.Fragment,null,n.createElement(i.B,null,"speed"),n.createElement(i.cJ,null),"This represents the ",n.createElement(i.I,null,"speed")," of the device in",n.createElement(s.Z,null)," ",n.createElement(i.I,null,"meters per second"),".")},{label:n.createElement(n.Fragment,null,n.createElement(i.B,null,"heading"),n.createElement(i.cJ,null),"This represents the ",n.createElement(i.B,null,"direction")," towards which the device is faicing. Value is specified in ",n.createElement(i.I,null,"degrees"),", indicating how far off from heading true ",n.createElement(i.B,null,"north")," the device is. ",n.createElement(i.I,null,"0 (Zero)")," degrees represents the ",n.createElement(i.B,null,"true north"),", and the direction is determined clockwise, which means that east is 90 degrees and west is 270 degrees. If speed is 0 (Zero), heading is ",n.createElement(i.BI,null,"NaN"),". If the device is unable to provide heading, value would be ",n.createElement(i.BI,null,"null"),".")}],d=[{label:n.createElement(n.Fragment,null,n.createElement(i.B,null,"code"),n.createElement(i.cJ,null),"This represent the error code, which can have either of below value:",n.createElement(i.cJ,null),n.createElement(i.B,null,"1:")," PERMISSION_DENIED",n.createElement(i.cJ,null),n.createElement(i.B,null,"2:")," POSITION_UNAVAILABLE",n.createElement(i.cJ,null),n.createElement(i.B,null,"3:")," TIMEOUT")},{label:n.createElement(n.Fragment,null,n.createElement(i.B,null,"message"),n.createElement(i.cJ,null),"User friendly error message.")}],h=[{label:n.createElement(n.Fragment,null,n.createElement(i.B,null,"maximumAge"),n.createElement(i.cJ,null),"Maximum age in ",n.createElement(i.I,null,"milliseconds")," for which the location should be",n.createElement(s.Z,null)," ",n.createElement(i.B,null,"cached"),". Default value is ",n.createElement(i.B,null,"0"),". The 0 (Zero) instructs not to cache location.")},{label:n.createElement(n.Fragment,null,n.createElement(i.B,null,"timeout"),n.createElement(i.cJ,null),"Maximum length of time in ",n.createElement(i.I,null,"milliseconds"),", device is allowed to take to return a position. Default value is ",n.createElement(i.I,null,"Infinity"),".")},{label:n.createElement(n.Fragment,null,n.createElement(i.B,null,"enableHighAccuracy"),n.createElement(i.cJ,null),"A ",n.createElement(i.I,null,"boolean")," flag to return more accurate values. Default value is ",n.createElement(i.I,null,"false"),".")}];const g=function(){var e=function(e){console.log(e)},l=function(e){console.log(e)};return(0,n.useEffect)((function(){window.navigator.geolocation.getCurrentPosition(e,l)}),[]),n.createElement(c.Z,null,n.createElement(o.Z,{as:"h1"},"Get User Location"),n.createElement(u.Z,null,"The ",n.createElement(s.Z,null),n.createElement(i.BI,null,"getCurrentPosition()")," ",n.createElement(s.Z,null)," method of ",n.createElement(s.Z,null),n.createElement(i.I,null,"window.navigator.geolocation")," is used to get the current position of the device. This will give a ",n.createElement(i.I,null,"prompt")," to user in address bar to either ",n.createElement(s.Z,null),n.createElement(i.B,null,'"Allow"')," or ",n.createElement(i.B,null,'"Block"')," the location request."),n.createElement(u.Z,null,n.createElement(i.IU,null,"Syntax:"),n.createElement(i.cJ,null),n.createElement(i.BI,null,"getCurrentPosition"),"(successHandler, errorHandler, options)"),n.createElement(u.Z,null,n.createElement(i.B,null,"successHandler:")," Callback method called on success event.",n.createElement(i.cJ,null),n.createElement(i.B,null,"errorHandler:")," Callback method called on error event.",n.createElement(i.cJ,null),n.createElement(i.B,null,"options:")," Optional configurations."),n.createElement(u.Z,null,n.createElement(i.IU,null,"Example:"),n.createElement(r.Z,null,"const successHandler = (successResponse) => {\n  console.log(successResponse);\n};\n      \nconst errorHandler = (errorResponse) => {\n  console.log(errorResponse);\n};\n\nconst getUserLocation = () => {\n  window.navigator.geolocation\n  .getCurrentPosition(\n    successHandler,\n    errorHandler\n  );\n}")),n.createElement(u.Z,null,"Above code will ask the user permission in below popup.",n.createElement(m.Z,{imagePath:a._.JS.BLOGS.GET_USER_LOCATION.PERMISSION_POPUP,alt:"Asking User Permission For Location",width:"100%"})),n.createElement(u.Z,null,"If user click on ",n.createElement(i.B,null,'"Allow"')," button, ",n.createElement(i.BI,null,"successCallback")," will be called and log below information."),n.createElement(r.Z,null,"{ \n  coords: {\n    accuracy: 1199.715114846548\n    altitude:  null\n    altitudeAccuracy: null\n    heading: null\n    latitude: 18.5829449\n    longitude: 59.584258\n    speed: null\n  }\n  timestamp: 1665140605284\n}"),n.createElement(u.Z,null,"But, if user denies permission by clicking on ",n.createElement(i.B,null,'"Block"')," button,"," ",n.createElement(i.BI,null,"errorCallback")," will be called and log below information."),n.createElement(r.Z,null,'{\n  code: 1\n  message: "User denied Geolocation"\n}'),n.createElement(o.Z,{as:"h2"},"Input parameters of getCurrentPosition()"),n.createElement(o.Z,{as:"h3"},"successHandler"),n.createElement(u.Z,null,"This the callback method called when user location is successfully accessed. It returns the ",n.createElement(s.Z,null),n.createElement(i.BI,null,"GeolocationPosition")," object."),n.createElement(u.Z,null,n.createElement(i.I,null,"GeolocationPosition")," object contains ",n.createElement(i.B,null,"coords")," and",n.createElement(s.Z,null)," ",n.createElement(i.B,null,"timeStamp")," attributes. The ",n.createElement(i.BI,null,"coords")," attribute contains below given properties:",n.createElement(i.GS,{unOrdered:!0,items:E})),n.createElement(o.Z,{as:"h3"},"errorHandler"),n.createElement(u.Z,null,"This the callback method called when error is thrown while accessing location. It returns the ",n.createElement(s.Z,null),n.createElement(i.BI,null,"GeolocationPositionError")," object."),n.createElement(u.Z,null,n.createElement(i.I,null,"GeolocationPositionError")," object contains ",n.createElement(i.B,null,"code")," and",n.createElement(s.Z,null)," ",n.createElement(i.B,null,"message")," attributes.",n.createElement(i.GS,{unOrdered:!0,items:d})),n.createElement(o.Z,{as:"h3"},"options"),n.createElement(u.Z,null,"These are the ",n.createElement(i.I,null,"optional")," properties."),n.createElement(u.Z,null,n.createElement(i.GS,{unOrdered:!0,items:h})))}}}]);