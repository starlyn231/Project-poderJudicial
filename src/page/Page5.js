import React from "react";

function Page5(props) {
  if (props.currentStep !== 5) {
    return null;
  }
  return (
    <div>
      <h1>hola page 5</h1>
    </div>
  );
}

export default Page5;
