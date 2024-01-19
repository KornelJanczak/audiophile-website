"use client";
import Logo from "./Logo/Logo";

const WhiteHeader: React.FC = () => {
  return (
    <div style={style}>
      <div
        style={{ borderBottom: "0.5px solid #d0d1d3", paddingBottom: "3rem" }}
      >
        <Logo />
      </div>
    </div>
  );
};

export default WhiteHeader;

const style = {
  maxWidth: "111rem",
  margin: "0 auto",
  padding: "3rem 4rem 0rem 4rem",
};
