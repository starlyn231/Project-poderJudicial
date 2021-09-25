import React from "react";

function Page6(props) {
  if (props.currentStep !== 6) {
    return null;
  }
  return (
    <div>
      <h1>hola page 6</h1>
    </div>
  );
}

export default Page6;
