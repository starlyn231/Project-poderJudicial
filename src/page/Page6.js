import React from "react";
import BodyForm from "../components/BodyForm";
import { Page1 } from "./Page1";

function Page6(props) {
  if (props.currentStep !== 6) {
    return null;
  }
  return (
    <div>
      <Page1 />
      <BodyForm />
    </div>
  );
}

export default Page6;
