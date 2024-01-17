"use client";
import Logo from "./Logo/Logo";

const WhiteHeader: React.FC = () => {
  return (
    <div style={style}>
      <Logo />
    </div>
  );
};

export default WhiteHeader;

const style = {
  maxWidth: "111rem",
  margin: "0 4rem",
  padding: "3rem 0rem 3rem 0rem",
  borderBottom: "0.5px solid #d0d1d3",
};
