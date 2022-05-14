import React, { useEffect, useRef } from "react";

PayPal.propTypes = {};

function PayPal(props) {
  const paypal = useRef();

  useEffect(() => {
    window.paypal
      .Buttons({
        createOrder: (data, actions, error) => {
          return actions.order.create({
            intent: "CAPTURE",
            purchase_units: [
              {
                description: "Cool looking",
                amount: {
                  currency_code: "USD",
                  value: 650,
                },
              },
            ],
          });
        },
        onApprove: async (data, actions) => {
          const order = await actions.order.capture;
          console.log(order);
        },
        onError: (err) => {
          console.log(err);
        },
      })
      .render(paypal.current);
  }, []);

  return (
    <>
      <div ref={paypal}></div>
    </>
  );
}

export default PayPal;
