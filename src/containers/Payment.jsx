import React, { useContext } from 'react';
import { PayPalButton } from 'react-paypal-button-v2';
import AppContext from '../context/AppContext';
import '../styles/components/Payment.css';

const Payment = ({ history }) => {
	const { state, addNewOrder } = useContext(AppContext);
	const { cart, buyer } = state;

	const { REACT_APP_CLIENT_ID } = process.env;

	const paypalOptions = {
		REACT_APP_CLIENT_ID: REACT_APP_CLIENT_ID,
		intent: 'capture',
		currency: 'MXN',
	};

	const buttonStyles = {
		layout: 'vertical',
		shape: 'pill',
	};

	const handlePaymentSuccess = (data) => {
		console.log(data);
		if (data.status === 'COMPLETED') {
			const newOrder = {
				buyer: buyer,
				product: cart,
				payment: data,
			};
			addNewOrder(newOrder);
			history.push('/checkout/success');
		}
	};

	const handleSumTotal = () => {
		const reducer = (accumulator, currentValue) =>
			accumulator + currentValue.price;
		const sum = cart.reduce(reducer, 0);
		return sum;
	};

	return (
		<div className='Paymen'>
			<div className='Payment-content'>
				<h3>Resumen del pedido:</h3>
				{cart.map((item, index) => (
					<div className='Payment-item' key={index}>
						<div className='Payment-element'>
							<h4>{item.title}</h4>
							<span>
								$ {''} {item.price}
							</span>
						</div>
					</div>
				))}
				<div className='Payment-button'>
					<PayPalButton
						paypalOptions={paypalOptions}
						buttonStyles={buttonStyles}
						amount={handleSumTotal()}
						onSuccess={(data) => handlePaymentSuccess(data)}
						onError={(error) => console.log(error)}
						onCancel={(data) => console.log(data)}
					/>
				</div>
			</div>
		</div>
	);
};

export default Payment;
