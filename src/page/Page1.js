import React from "react";
import BodyForm from "../components/BodyForm";
import "./style.css";
export function Page1(props) {
  if (props.currentStep !== 1) {
    return null;
  }

  return (
    <div>
      <BodyForm />
    </div>
  );
}

export default Page1;
