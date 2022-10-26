import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import Button, { BUTTON_TYPES_CLASS } from "../Button/Button.component";
import { PaymentFormContainer, FormContainer } from "./Payment-form.styles";
const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const paymentHandler = async (e) => {
    e.preventDefault();
    console.log("oke");
    if (!stripe || !elements) {
      return;
    }
    try {
      const response = await fetch(
        "/.netlify/functions/create-payment-intent",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ amount: 1000 }),
        }
      ).then((res) => res.json());
      // const data = response.json();
      console.log(response);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <PaymentFormContainer>
      <FormContainer>
        <h2>Credit card payment: </h2>
        <CardElement />
        <Button
          buttonType={BUTTON_TYPES_CLASS.inverted}
          onClick={paymentHandler}
        >
          Pay now
        </Button>
      </FormContainer>
    </PaymentFormContainer>
  );
};

export default PaymentForm;
