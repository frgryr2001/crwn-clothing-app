import styled from "styled-components";
import Button from "../Button/Button.component";
export const PaymentFormContainer = styled.div`
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const FormContainer = styled.div`
  height: 100px;
  min-width: 500px;
`;
export const PaymentButton = styled(Button)`
  margin-top: 30px;
  margin-left: auto;
`;
