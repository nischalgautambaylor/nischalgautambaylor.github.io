import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Electrical Engineer",
          "PhD Student",
          "Python User",
          "Quantum Computing Enthusiast",
          "MATLAB User",
          "Casual Footballer",
          "Pool Player",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 40,
      }}
    />
  );
}

export default Type;
