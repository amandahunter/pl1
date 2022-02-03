function initMap() void {
    const map = new google.maps.Map(document.getElementById("map"){
      zoom: 8,
      center: { lat: 48, lng: -79 },
    });
    // Create an array of alphabetical characters used to label the markers.
    const labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    // Add some markers to the map.
    // Note: The code uses the JavaScript Array.prototype.map() method to
    // create an array of markers based on a given "locations" array.
    // The map() method here has nothing to do with the Google Maps API.
    const markers = locations.map((location, i) => {
      return new google.maps.Marker({
        position: location,
        label: labels[i % labels.length],
      });
    });
    // Add a marker clusterer to manage the markers.
    new MarkerClusterer(map, markers, {
      imagePath:
        "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
    });
  }
  const locations = [
    { lat: 49.5121447, lng: 0.6736664999999999},
  { lat: 49.514073, lng: 0.6735673999999999},
  { lat: 48.8531827, lng: 2.3691443},
  { lat: 48.8527288, lng: 2.3505635},
  
  ];
    
  // ChIJ4zc8R5dX4EcRxegymMc8KCY  victors house
  // ChIJtWLrojBX4EcRGJ7ylX1M8uk  cemetary
  // ChIJKZKprAFy5kcREOvlZ8mwHiM  bastille
  // ChIJr0jUneNx5kcRQ_b6LMiOXek   notre dame


   
// Below is an attempt to make icons as my markers via the github repository, in particular, I adapted this from 
// https://github.com/googlemaps/js-samples/blob/main/samples/custom-markers/src/index.ts
// Because this was not necessary but merely a bonus, I chose to include it here to see where I was going, 
// and perhaps when you have time one of these days we can go over how to fine to this to make it Worker. 


// const iconBase = "https://github.com/amandahunter/pl1/tree/main/story/iconz";

// //     const icons: Record<string, { icon: string }> = {
//         bastille: {
//           icon: iconBase + "guillotine.png",
//         },
//         home: {
//           icon: iconBase + "quill-paper-computer-icons-pens-feather-208412.png",
//         },
//         notredame: {
//           icon: iconBase + "444739.png",
//         },  
//         ville: {
//             icon: iconBase + "vintage-floral-wreath.jpg",
//         },
//       };
    
//       const features = [
//         {
//           position: new google.maps.LatLng(-33.91721, 151.2263),
//           type: "home",
//         },
//         {
//             position: new google.maps.LatLng(-33.91539, 151.2282),
//             type: "bastille",
//           },
//           {
//             position: new google.maps.LatLng(-33.91747, 151.22912),
//             type: "notredame",
//           },
//           {
//             position: new google.maps.LatLng(-33.9191, 151.22907),
//             type: "ville",
//           },
//         ];
//      // Create markers.
//   for (let i = 0; i < features.length; i++) {
//     const marker = new google.maps.Marker({
//       position: features[i].position,
//       icon: icons[features[i].type].icon,
//       map: map,
//     });
//   }
// }
// // [END maps_custom_markers]
// export { initMap };
    
    
    

