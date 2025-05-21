import React from "react";

function Hadder({ children }) {
  return (
    <div className="bg-center bg-cover bg-no-repeat   w-full bg-[url(./assets/bannershape.png)]">
      {children}
    </div>
  );
}

export default Hadder;
