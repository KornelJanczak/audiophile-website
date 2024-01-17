import { VerifyEmailProps } from "@/models/@type-props";
import classes from "./VerifyEmail.module.css";
import Verification from "./Verification";
import Logo from "../UI/Logo/Logo";
import WhiteHeader from "../UI/WhiteHeader";

const VerifyEmailComponent: React.FC<VerifyEmailProps> = ({ searchParams }) => {
  const token = searchParams.token;
  const toEmail = searchParams.to;

  return (
    <>
      <WhiteHeader />
      <div className={classes.container}>
        <div>
          {token && typeof token === "string" ? (
            <Verification token={token} />
          ) : (
            <div className={classes.box}>
              <h2>Check your email!</h2>
              {toEmail ? (
                <p>
                  We&apos;ve sent a verification link to{" "}
                  <strong>{toEmail}</strong>
                </p>
              ) : (
                <p> We&apos;ve sent a verification link to your email.</p>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default VerifyEmailComponent;
