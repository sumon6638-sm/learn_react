### Link: 
https://github.com/alex3165/react-mapbox-gl
https://github.com/mapbox/mapbox-gl-directions/issues/157
https://account.mapbox.com/access-tokens/

### get lattitude & longitude: https://www.latlong.net/

### install mapbox-gl: npm i mapbox-gl

### install mapbox-gl direction: npm i @mapbox/mapbox-gl-directions

### Coading:
### in index.html: 
<link href="https://api.mapbox.com/mapbox-gl-js/v2.5.1/mapbox-gl.css" rel="stylesheet">

<link rel="stylesheet" href="https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-directions/v4.1.0/mapbox-gl-directions.css" type="text/css">

### in js file:
import mapboxgl from 'mapbox-gl';
import MapboxDirections from '@mapbox/mapbox-gl-directions/dist/mapbox-gl-directions'

mapboxgl.accessToken = 'pk.eyJ1IjoibXNjcmFja2VyNjYzOCIsImEiOiJja3Y0YmtkMmwxb2N1MzFxMXU4dWxpZmxiIn0.x7oAXluuqnpOhm81JKzptQ';

** Baki code gulo useEffect er vitore... krn useEffect na dile dom available howar age data load korte caibe jeta se pabe na...tai script er vitorer baki code useEffect ee rekhe kaj korte hbe... taile jkhn dom available hbe baki data se load kore dekhanur cesta korbe...


# Now try to react make a map with 'React Leaflet'

# change website title when i change react route(According to the route)...