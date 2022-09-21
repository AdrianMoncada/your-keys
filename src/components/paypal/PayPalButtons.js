import React from "react";
import { PayPalButton } from "react-paypal-button-v2";

const PayPalButtons = ({price, handleSubmit}) => {
  const createOrder = (data, actions) => {
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            value: price.toString(),
          },
        },
      ],
    });
  };

  const onApprove = (data, actions) => {
    return actions.order.capture(handleSubmit());
  };

  return (
    <div>
      <PayPalButton
        amount="0.01"
        // shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"
        createOrder={(data, actions) => createOrder(data, actions)}
        onApprove={(data, actions) => onApprove(data, actions)}
        options={{
          clientId: "AR3E7uQC85Ui62JTWciBKn6tp_Fb_-vbzIc6toiVWnFcCqKBQU6BD-30FHev5Hfg8tpsSc8pPM6DKjnX",
        }}
      />
    </div>
  );
};

export default PayPalButtons;
