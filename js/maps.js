function initMap() {
  const locations = [
    { id: "map1", lat: -11.994055006951774, lng: -77.05955271511921, name: "Siete Sopas Mega Plaza" },
    { id: "map2", lat: -12.007460076267778, lng: -77.05838374795249, name: "Siete Sopas Plaza Norte" },
    { id: "map3", lat: -12.087922946521166, lng: -77.03427041833794, name: "Siete Sopas Lince" },
    { id: "map4", lat: -12.140571111189866, lng: -76.99496113221058, name: "Siete Sopas Santiago de Surco" },
    { id: "map5", lat: -12.113274464931923, lng: -77.0254318836946, name: "Siete Sopas Surquillo" },
    { id: "map6", lat: -12.118985190895915, lng: -77.02802697593206, name: "Siete Sopas Miraflores" },
    { id: "map7", lat: -12.055952516544929, lng: -76.97160092808355, name: "Siete Sopas Santa Anita" },
    { id: "map8", lat: -12.015985958763366, lng: -76.99877987131256, name: "Siete Sopas SJ Lima" },
    { id: "map9", lat: -12.06449306788892, lng:-77.01493053948543, name: "Siete Sopas Gamarra" },
  ];

  locations.forEach(loc => {
    const map = new google.maps.Map(document.getElementById(loc.id), {
      center: { lat: loc.lat, lng: loc.lng },
      zoom: 17, // Ajusta el zoom para acercar más el mapa
      disableDefaultUI: true,  // Desactiva todos los controles predeterminados
      zoomControl: true,      // Activa el control de zoom
      streetViewControl: false, // Desactiva la vista en calle (el icono del muñequito)
      mapTypeControl: false,   // Desactiva el control de tipo de mapa (satélite/mapa)
      scaleControl: false,     // Desactiva la escala
      rotateControl: false,    // Desactiva el control de rotación
      attributionControl: false, // Elimina la atribución "Datos del mapa" y "Condiciones"
      gestureHandling: "greedy",  // Permite el zoom con la rueda del ratón
    });

    new google.maps.Marker({
      position: { lat: loc.lat, lng: loc.lng },
      map: map,
      title: loc.name,
    });
  });
}


