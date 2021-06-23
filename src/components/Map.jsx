import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';

const Map = ({ data }) => {
	const mapStyles = {
		height: '50vh',
		width: '100%',
	};

	const LatLng = {
		lat: parseFloat(data.lat),
		lng: parseFloat(data.lng),
	};

	const { API_KEY } = process.env;

	return (
		<LoadScript googleMapsApiKey={API_KEY}>
			<GoogleMap mapContainerStyle={mapStyles} zoom={15} center={LatLng}>
				<Marker position={LatLng} />
			</GoogleMap>
		</LoadScript>
	);
};

export default Map;
