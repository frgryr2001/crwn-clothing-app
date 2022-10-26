import { SpinnerContainer, SpinnerOverlay } from "./spinner.styles";

import React from "react";

const Spinner = () => {
  return (
    <SpinnerOverlay>
      <SpinnerContainer />
    </SpinnerOverlay>
  );
};

export default Spinner;
