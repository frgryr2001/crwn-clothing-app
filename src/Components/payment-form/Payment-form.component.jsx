import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { BUTTON_TYPES_CLASS } from "../Button/Button.component";
import {
  PaymentFormContainer,
  FormContainer,
  PaymentButton,
} from "./Payment-form.styles";
import { useState } from "react";
import { useSelector } from "react-redux";
import { selectCartItem, selectCartTotal } from "../../store/cart/cartSelector";
import { selectCurrentUser } from "../../store/user/userSelectors";
const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const amount = useSelector(selectCartTotal);
  const currentUser = useSelector(selectCurrentUser);
  const [isProcessingPayment, setIsProcessingPayment] = useState(false);
  const paymentHandler = async (e) => {
    e.preventDefault();
    console.log("oke");
    if (!stripe || !elements) {
      return;
    }
    try {
      setIsProcessingPayment(true);
      const response = await fetch(
        "/.netlify/functions/create-payment-intent",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ amount: amount * 100 }),
        }
      ).then((res) => res.json());
      // const data = response.json();

      const {
        paymentIntent: { client_secret },
      } = response;
      console.log(client_secret);
      const paymentResult = await stripe.confirmCardPayment(client_secret, {
        payment_method: {
          card: elements.getElement(CardElement),
          billing_details: {
            name: currentUser ? currentUser.displayName : "Guest",
          },
        },
      });
      console.log(paymentResult);
      setIsProcessingPayment(false);
      if (paymentResult.error) {
        alert(paymentResult.error.message);
      } else {
        if (paymentResult.paymentIntent.status === "succeeded") {
          alert("Payment successful");
        }
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <PaymentFormContainer>
      <FormContainer>
        <h2>Credit card payment: </h2>
        <h3>4242 4242 4242 4242</h3>
        <h3>0424 242 42424</h3>
        <CardElement />
        <PaymentButton
          buttonType={BUTTON_TYPES_CLASS.inverted}
          isLoading={isProcessingPayment}
          onClick={paymentHandler}
        >
          Pay now
        </PaymentButton>
      </FormContainer>
    </PaymentFormContainer>
  );
};

export default PaymentForm;
