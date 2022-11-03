let map;

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: new google.maps.LatLng(56.9571136, 24.1112349),
        zoom: 12,
    });

    const iconBase =
        "image/map-pin.svg";
    const icons = {
        info: {
            icon: iconBase,
        },
    };
    const features = [
        {
            position: new google.maps.LatLng(56.9571136, 24.1112349),
            type: "info",
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

window.initMap = initMap;
