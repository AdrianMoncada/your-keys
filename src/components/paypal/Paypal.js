import React /* , {useContext} */ from "react";
import ReactDOM from "react-dom";
import { useNavigate } from "react-router";
import styled from "styled-components";

const PaypalButton = window.paypal.Buttons.driver("react", { React, ReactDOM });



const Paypal = ({ price, handleSubmit }) => {
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
    <DivPaypal>
      <div className="hola">
        <PaypalButton
          createOrder={(data, actions) => createOrder(data, actions)}
          onApprove={(data, actions) => onApprove(data, actions)}
        />
      </div>
    </DivPaypal>
  );
};

const DivPaypal = styled.div`
  .paypal-buttons:first-child {
    display: none !important;
  }

  /* #zoid-paypal-buttons-uid_6d43ea153b_mja6nta6mjy {
    display: none;
  } */
`;
export default Paypal;
