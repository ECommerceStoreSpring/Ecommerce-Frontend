import React from 'react'
import Stripe from 'react-stripe-checkout'
import axios from 'axios'

const Payment = (props) => {
    
    console.log(props.match.params.subTotal);
    console.log(props.location.param1);
    async function handleToken(token) {
        console.log(token); await axios.post("http://localhost:8081/api/payment/charge", "", {
            headers: {
                token: token.id,
                amount: 500,
            },
        }).then(() => {
            alert("Payment Success");
        }).catch((error) => {
            alert(error);
        });
    }

    return (
        <div className="App" >
            <Stripe
                stripeKey="pk_test_51LiG5qJgQYWVAffh0Fip7a9mcw0QRtOxsJS7k0o3AffK496dssgRyPzsFdhaF6jnPNK5rh98Nh0pSV9qMTf4ZuqY009IuWLqTi" token={handleToken} />
        </div>
    )
}

export default Payment;