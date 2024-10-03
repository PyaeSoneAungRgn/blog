document.onreadystatechange = () => {
  if (document.readyState === 'complete') {
    docsearch({
      appId: 'SQHZQLFJMP',
      apiKey: '4c28157f280bcebf4cd50e7a7cf0d4bd',
      indexName: 'pyaesoneaung',
      container: 'div#docSearch'
    })

    document
      .getElementById('searchIcon')
      .addEventListener('click', clickDocSearch)

    function clickDocSearch() {
      const button = document.getElementsByClassName('DocSearch-Button')
      button[0].click()
    }

    var mapContainer = document.getElementById('map')
    if (mapContainer) {
      var map = L.map('map').setView([18.769, 98.9683], 12.4)

      L.tileLayer(
        'https://tiles.stadiamaps.com/tiles/stamen_terrain/{z}/{x}/{y}{r}.{ext}',
        {
          minZoom: 0,
          maxZoom: 18,
          attribution:
            '&copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://www.stamen.com/" target="_blank">Stamen Design</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
          ext: 'png',
          accessToken: '6ec7a890-d268-4d3f-8f7a-b354e0d6304d'
        }
      ).addTo(map)

      var locations = [
        [
          18.806173672159833,
          98.95088956755365,
          'https://www.youtube.com/watch?v=e5mDxImxsQc',
          'Ride to Angkaew Reservoir'
        ],
        [
          18.759709518856404,
          98.91862628104475,
          'https://www.youtube.com/watch?v=K6fG1y3CGbM',
          'Ride to Wat Phra That Doi Kham'
        ],
        [
          18.79164223277946,
          98.9331212576711,
          'https://www.youtube.com/watch?v=Un3X8oicXi0',
          'Ride to Chaloem Phra Kiat Pavilion Viewpoint'
        ],
        [
          18.787959311540863,
          98.99307636727593,
          'https://youtu.be/plS6uDEu8Pg?si=YQHB0y5ehetMCufQ',
          'Ride to Tha Phae Gate'
        ],
        [
          18.81671414662279,
          98.88920548269493,
          'https://youtu.be/pZ_eDrazCDc?si=DrQret9eospey1Io',
          'Ride to Doi Pui View Point'
        ],
        [
          18.81310192993326, 
          98.8845883382886,
          'https://youtu.be/Fr0h6OkepwI?si=Q3nnrsFJFQZC84SZ',
          'Ride from Song Sean Coffee Shop'
        ]
      ]

      var scooterIcon = L.divIcon({
        html: '🛵',
        className: 'emoji-icon',
        iconSize: [32, 32],
        iconAnchor: [16, 16]
      })

      locations.forEach(function (location) {
        var marker = L.marker([location[0], location[1]], {
          icon: scooterIcon
        }).addTo(map)
        marker.bindTooltip(location[3], {
          permanent: false,
          direction: 'top',
          offset: [0, -10],
          className: 'custom-tooltip'
        })
        marker.on('click', function () {
          window.open(location[2], '_blank')
        })
      })
    }
  }
}
