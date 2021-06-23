import { useState, useEffect } from 'react';
import axios from 'axios';
import pass from '../../config/index';

const useGoogleAddress = (address) => {
	const [map, setMap] = useState({});
	const mapID = pass.mapsApiKey;
	const API = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${mapID}`;

	useEffect(async () => {
		const response = await axios(API);
		setMap(response.data.results[0].geometry.location);
	}, []);
	return map;
};

export default useGoogleAddress;
