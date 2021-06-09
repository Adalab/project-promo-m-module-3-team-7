import React, { useState } from "react";
import Preview from "./Preview";
import Form from "./Form";

function Main() {
  return (
    <section className="main__content">
      <Preview />
      <Form />
    </section>
  );
}

export default Main;
