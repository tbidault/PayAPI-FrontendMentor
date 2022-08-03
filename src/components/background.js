import React from "react";

export default function Background(props) {
  return (
    <div style={{ zIndex: -1 }}>
      <img
        style={{
          position: "absolute",
          left: `${props.desktop[0]}px`,
          top: `${props.desktop[1]}px`,
        }}
        src={"/assets/shared/desktop/bg-pattern-circle.svg"}
      />
    </div>
  );
}
