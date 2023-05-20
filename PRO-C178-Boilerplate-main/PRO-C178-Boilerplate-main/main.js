let latitude = 22.7868542
let longitude = 88.3643296
mapboxgl.accessToken  = "pk.eyJ1IjoieWFkYXZtb251IiwiYSI6ImNsZ3JoN3J6YjB6emkzdW1yNzE0amtreTEifQ.jirtABXFzsJCOUs8DOurng"
var map = new mapboxgl.Map({
    container : "map",
    style : "mapbox://styles/mapbox/streets-v11",
    center : [longitude,latitude],
    zoom : 16,
})
map.addControl(new mapboxgl.GeolocateControl({positionOptions : {enableHighAccuracy : true},trackUserLocation:true}))
map.addControl(new MapboxDirections({accessToken : mapboxgl.accessToken}),
"top-left")