/**
 * @license
 * Copyright 2021 Google LLC.
 * SPDX-License-Identifier: Apache-2.0
 */


// The following example creates five accessible and
// focusable markers.

function initMap(): void {
  const map = new google.maps.Map(
    document.getElementById("map") as HTMLElement,
    {
      zoom: 6,
      center: { lat: 53.566444, lng: -1.874753 },
    }
  );

  // Set LatLng and title text for the markers. The first marker (Boynton Pass)
  // receives the initial focus when tab is pressed. Use arrow keys to
  // move between markers; press tab again to cycle through the map controls.
  const tourStops: [google.maps.LatLngLiteral, string][] = [
    //  UK
    [{ lat: 53.566630, lng: -0.079821 }, "Grimsby"],
    [{ lat: 53.229010, lng: -0.540006 }, "Lincoln"],
    [{ lat: 53.767180, lng: -0.327435 }, "Hull"],
    [{ lat: 53.343777, lng: 0.019004 }, "Kenwick Park"],
    [{ lat: 53.798561, lng: -1.549767 }, "Leeds"],
    [{ lat: 53.960800, lng: -1.073879 }, "York"],
    [{ lat: 53.479575, lng: -2.243575 }, "Manchester"],
    [{ lat: 53.353428, lng: -2.275718 }, "Manchester Airport"],
    [{ lat: 53.412937, lng: -1.409038 }, "Meadowhall"],
    [{ lat: 53.1922937, lng: 0.347634 }, "Fantasy Island"],
    [{ lat: 53.147219, lng: 0.338120 }, "Skegness"],
    [{ lat: 53.638056, lng: -0.659328 }, "Go Ape Normanby Hall"],
    [{ lat: 53.586574, lng: -0.654850 }, "Scunthorpe"],
    [{ lat: 53.378611, lng: -1.471450 }, "Sheffield"],
    [{ lat: 51.505103, lng: -0.1263990 }, "London"],

    // NL
    [{ lat: 51.948761, lng: 4.137080 }, "Europoort Rotterdam "],
    [{ lat: 52.368199, lng: 4.900762 }, "Amsterdam - DATE "],

    // PAR
    [{ lat: 49.008708, lng: 2.550542 }, "Paris Charles de Gaulle Airport "],
    [{ lat: 48.855649, lng: 2.351819 }, "Paris - DATE "],
    [{ lat: 48.867209, lng: 2.783808 }, "Disneyland Paris - DATE"],

    // FUE
    [{ lat: 28.448104, lng: -13.866353 }, "Fuerteventura Airport"],
    [{ lat: 28.072954, lng: -14.306402 }, "Esquinzo / Club Jandía Princess "],
    [{ lat: 28.060693, lng: -14.319502 }, "Las Gaviotas - sep 5 21"],
    [{ lat: 28.187251, lng: -14.157065 }, "Oasis Wildlife Fuerteventura - sep 7 21"],
  ];










  // Create an info window to share between markers.
  const infoWindow = new google.maps.InfoWindow();

  // Create the markers.
  tourStops.forEach(([position, title], i) => {
    const marker = new google.maps.Marker({
      position,
      map,
      title: `${i + 1}. ${title}`,
      label: `${i + 1}`,
      optimized: false,
    });

    // Add a click listener for each marker, and set up the info window.
    marker.addListener("click", () => {
      infoWindow.close();
      infoWindow.setContent(marker.getTitle());
      infoWindow.open(marker.getMap(), marker);
    });
  });
}

declare global {
  interface Window {
    initMap: () => void;
  }
}
window.initMap = initMap;
export {};
