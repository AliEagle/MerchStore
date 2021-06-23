import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import Map from '../components/Map';
import useGoogleAddress from '../hooks/useGoogleAddress';
import '../styles/components/Success.css';

const Success = () => {
	const { state } = useContext(AppContext);
	const { buyer } = state;
	const location = useGoogleAddress(
		buyer[0].address,
		buyer[0].city,
		buyer[0].province,
		buyer[0].country
	);
	return (
		<div className='Success'>
			<div className='Success-content'>
				<h2>{buyer[0].name}</h2>
				<span>Tu pedido llegara en 3 dias a tu dirección</span>

				<div className='Success-map'> {<Map data={location} />} </div>
			</div>
		</div>
	);
};

export default Success;
