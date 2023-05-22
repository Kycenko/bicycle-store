import React from 'react';
import GoogleMapReact from 'google-map-react';


const Map = () => {
  const mapOptions = {
    disableDefaultUI: true,
  };
  return (
    <div style={{ height: '300px', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyBXqaQ4byUqcuNqTVLQ6uhdXNp3N2p_LkE' }}
        defaultCenter={{ lat: 53.9045, lng: 27.5615 }}
        defaultZoom={12}
        options={mapOptions}
      ></GoogleMapReact>
    </div>
  );
};

export default Map;