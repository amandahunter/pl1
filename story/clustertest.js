function initMap() void {
    const map = new google.maps.Map(document.getElementById("map"){
      zoom: 3,
      center: { lat: 48, lng: -79 },
    });
    // Create an array of alphabetical characters used to label the markers.
    const iconBase = "https://github.com/amandahunter/pl1/tree/main/story/iconz";

    const icons: Record<string, { icon: string }> = {
        bastille: {
          icon: iconBase + "guillotine.png",
        },
        home: {
          icon: iconBase + "quill-paper-computer-icons-pens-feather-208412.png",
        },
        notredame: {
          icon: iconBase + "444739.png",
        },  
        ville: {
            icon: iconBase + "vintage-floral-wreath.jpg",
        },
      };
    
      const features = [
        {
          position: new google.maps.LatLng(-33.91721, 151.2263),
          type: "home",
        },
        {
            position: new google.maps.LatLng(-33.91539, 151.2282),
            type: "bastille",
          },
          {
            position: new google.maps.LatLng(-33.91747, 151.22912),
            type: "notredame",
          },
          {
            position: new google.maps.LatLng(-33.9191, 151.22907),
            type: "ville",
          },
        ];
     // Create markers.
  for (let i = 0; i < features.length; i++) {
    const marker = new google.maps.Marker({
      position: features[i].position,
      icon: icons[features[i].type].icon,
      map: map,
    });
  }
}
// [END maps_custom_markers]
export { initMap };
    
    
    

// <!--const labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//     // Add some markers to the map.
//     // Note: The code uses the JavaScript Array.prototype.map() method to
//     // create an array of markers based on a given "locations" array.
//     // The map() method here has nothing to do with the Google Maps API.
//     const markers = locations.map((location, i) => {
//       return new google.maps.Marker({
//         position: location,
//         label: labels[i % labels.length],
//       });
//     });
//     // Add a marker clusterer to manage the markers.
//     new MarkerClusterer(map, markers, {
//       imagePath:
//         "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
//     });
//   }
//   const locations = [
//     { lat: 49.758123, lng: -92.65349},
//   { lat: 45.442046, lng: -78.820583},
//   { lat: 48.17812017, lng: -90.22694426},
 
  
//   ];-->