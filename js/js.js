//carrosel

var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 4000); // Change image every 2 seconds
}

//navbar customizado

const nav = document.getElementById("cabeca");
window.onscroll = function() {
  if (window.pageYOffset >= 20 || document.documentElement.scrollTop >= 20) {
    nav.classList.add("nav-colored");
    nav.classList.remove("nav-transparent");
  } else {
    nav.classList.remove("nav-colored");
    nav.classList.add("nav-transparent");
  }
};

//mapa

mapboxgl.accessToken = 'pk.eyJ1IjoicG9sdmluaG8iLCJhIjoiY201aDB5ZXd4MGVwNjJrcTEwbnUwdGxiNyJ9.jtM8fnPmX8jvpwMH9CLWtA';
    
const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/polvinho/cm5h5qw0c001201qf2fnfa002',
    zoom: 8.7,
    center: [-46.673, -23.236]
});



const geojson = {
    'type': 'FeatureCollection',
    'features': [
        {
            'type': 'Feature',
            'geometry': {
                'type': 'Point',
                'coordinates': [-47.01264331979516, -22.9799681649649]
            },
            'properties': {
                'title': 'Valinhos'
            }
        },
        {
            'type': 'Feature',
            'geometry': {
                'type': 'Point',
                'coordinates': [-46.667173120458386, -23.597894151104057]
            },
            'properties': {
                'title': 'Ibirapuera'
            }
        },
        {
            'type': 'Feature',
            'geometry': {
                'type': 'Point',
                'coordinates': [-46.779183278445885, -23.539832844553104]
            },
            'properties': {
                'title': 'Osasco'
            }
        },
        {
            'type': 'Feature',
            'geometry': {
                'type': 'Point',
                'coordinates': [-46.64794921875, -23.574686305893124]
            },
            'properties': {
                'title': 'Paraiso'
            }
        },
        {
            'type': 'Feature',
            'geometry': {
                'type': 'Point',
                'coordinates': [-46.76956931414378, -23.610161856231272]
            },
            'properties': {
                'title': 'Taboão da Serra'
            }
        },
        {
            'type': 'Feature',
            'geometry': {
                'type': 'Point',
                'coordinates': [-46.65773118491478, -23.568788021779525]
            },
            'properties': {
                'title': 'Jardins'
            }
        },
        {
            'type': 'Feature',
            'geometry': {
                'type': 'Point',
                'coordinates': [-46.99873934064641, -22.699237679386684]
            },
            'properties': {
                'title': 'Jaguariuna'
            }
        }
        // Add your other 6 points here
    ]
};

// Add markers to the map
for (const feature of geojson.features) {
    // Create a DOM element for each marker
    const el = document.createElement('div');
    el.className = 'marker';

    // Add markers to the map
    new mapboxgl.Marker(el)
        .setLngLat(feature.geometry.coordinates)
        .addTo(map);
}

function Paraiso() {
  map.flyTo({
center: [-46.64794921875, -23.574686305893124],
zoom: 20
});
}
function Jaguariuna() {
  map.flyTo({
center: [-46.99873934064641, -22.699237679386684],
zoom: 20
});
}

function Jardins() {
  map.flyTo({
center: [-46.65773118491478, -23.568788021779525],
zoom: 20
});
}

function Taboao() {
  map.flyTo({
center: [-46.76956931414378, -23.610161856231272],
zoom: 20
});
}

function Osasco() {
  map.flyTo({
center: [-46.779183278445885, -23.539832844553104],
zoom: 20
});
}

function Ibirapuera() {
  map.flyTo({
center: [-46.667173120458386, -23.597894151104057],
zoom: 20
});
}
          
function Valinhos() {
  map.flyTo({
center: [-47.01264331979516, -22.9799681649649],
zoom: 20
});
}