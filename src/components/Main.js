import React, { useState } from "react";
import Preview from "./Preview";
import Form from "./Form";

function Main() {
  const [image, setImage] = useState("");

  const updateAvatar = (image) => {
    setImage(image);
  };

  return (
    <section className="main__content">
      <Preview image={image} />
      <Form image={image} updateAvatar={updateAvatar} />
    </section>
  );
}

export default Main;
