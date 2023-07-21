import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet';
import { fetchRoute } from './osrmService';
import { useSelector } from 'react-redux';

const MapComponent = () => {
    const centerPosition = [59.84660399, 30.29496392]

    const selectedCoordinates = useSelector((state) => state.navigation.value);
    const startPoint = selectedCoordinates[0] || centerPosition; 
    const middlePoint = selectedCoordinates[1] || centerPosition;
    const endPoint = selectedCoordinates[2] || centerPosition;
    console.log(useSelector((state=>state.navigation.value)));
    let [routeData ,setRouteData ] = useState([startPoint,middlePoint, endPoint]);

    useEffect(() => {
        const getRouteData = async () => {
          try {
            const response = await fetchRoute(startPoint, middlePoint, endPoint);
            console.log(response);
            setRouteData(response.routes[0].geometry.coordinates);
          } catch (error) {
            console.error(error);
          }
        };
    
        getRouteData();
      }, [startPoint, middlePoint, endPoint]);

  return (
    <MapContainer center={centerPosition} zoom={13} style={{ height: '600px' }}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Polyline positions={routeData} />
      <Marker position={startPoint}>
        <Popup>Старт</Popup>
      </Marker>
      <Marker position={middlePoint}>
        <Popup>Промежуточная точка</Popup>
      </Marker>
      <Marker position={endPoint}>
        <Popup>Финиш</Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapComponent;





// [59.84660399, 30.29496392],
//     [59.82934196, 30.42423701],
//     [59.83567701, 30.38064206],
