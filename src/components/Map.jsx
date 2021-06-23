import React from 'react';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import pass from '../../config/index';

const Map = ({ data }) => {
	const mapStyles = {
		height: '50vh',
		width: '100%',
	};

	const LatLng = {
		lat: parseFloat(data.lat),
		lng: parseFloat(data.lng),
	};

	const mapsID = pass.mapsApiKey;

	return (
		console.log(data.lat, data.lng),
		(
			<LoadScript googleMapsApiKey={mapsID}>
				<GoogleMap mapContainerStyle={mapStyles} zoom={10} center={LatLng}>
					<Marker position={LatLng} />
				</GoogleMap>
			</LoadScript>
		)
	);
};

export default Map;
