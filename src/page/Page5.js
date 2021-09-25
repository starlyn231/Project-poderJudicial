import React from "react";
import { Alert } from "../components/Alert";

function Page5(props) {
  if (props.currentStep !== 5) {
    return null;
  }

  return (
    <div>
      <h1>j</h1>

      <Alert />
    </div>
  );
}

export default Page5;
