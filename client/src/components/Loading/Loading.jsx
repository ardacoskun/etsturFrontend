import React from "react";
import Spin from "react-cssfx-loading/lib/Spin";

const Loading = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "250px",
      }}
    >
      <Spin color="#ce3b47" width="80px" height="80px" duration="2s" />
    </div>
  );
};

export default Loading;
