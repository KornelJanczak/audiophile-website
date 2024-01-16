"use client";
import { Triangle } from "react-loader-spinner";

const Loading = () => {
  return (
    <div
      style={{
        margin: "0 auto",
        backgroundColor: "#101010",
        height: "100vh",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Triangle color="#ffffff" width={120} height={120} />
    </div>
  );
};

export default Loading;
