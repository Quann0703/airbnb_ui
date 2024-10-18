// 'use client';
//
// import { useEffect } from 'react';
// import { createPayment } from '@/actions/payment/createPayment';
// import { handleReturn } from '@/actions/payment/returnPayment';
//
// declare global {
//     interface Window {
//         paypal: any;
//     }
// }
//
// const PayPalButton = () => {
//     useEffect(() => {
//         const script = document.createElement('script');
//         script.src = `https://www.sandbox.paypal.com/sdk/js?client-id=${process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID}`;
//         script.async = true;
//         script.onload = () => {
//             window.paypal
//                 .Buttons({
//                     createOrder: async (data: any) => {
//                         const paymentData = {
//                             propertyId: '66f90fb968af869d3f96133e',
//                             night: 1,
//                         };
//                         const paymentResponse = await createPayment(paymentData);
//                         return paymentResponse?.data.approvalUrl;
//                     },
//                     onApprove: async (data: any) => {
//                         const { token, PayerID } = data;
//                         await handleReturn(token, PayerID);
//                         alert('Payment successful!');
//                     },
//                     onError: (err: any) => {
//                         console.error('PayPal Checkout onError', err);
//                     },
//                 })
//                 .render('#paypal-button-container');
//         };
//         document.body.appendChild(script);
//     }, []);
//
//     return <div id="paypal-button-container"></div>;
// };
//
// export default PayPalButton;
