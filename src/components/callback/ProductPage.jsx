import { useCallback } from 'react'
import ShippingForm from './ShippingForm';

export default function ProductPage({ productId, referrer, theme }) {
    // useCallback
    const handleSubmit = useCallback((orderDetails) => {
        post('/product/' + productId + '/buy', {
            referrer,
            orderDetails,
        });
    }, [productId, referrer]);

    /* function handleSubmit(orderDetails) {
        post('/product/' + productId + '/buy', {
            referrer,
            orderDetails
        });
    } */

    return (
        <div className={theme}>
            <ShippingForm onSubmit={handleSubmit} />
        </div>
    );
}

function post(url ,data) {
    // Imagine this sends a request
    console.log('POST /' + url);
    console.log(data);
}
