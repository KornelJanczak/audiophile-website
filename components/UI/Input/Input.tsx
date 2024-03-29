import { FormikErrors, FormikValues } from "formik";
import classes from "./Input.module.css";
import { ChangeEvent, FocusEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/navigation";

interface Iinput {
  inputValidate: FormikErrors<FormikValues> | boolean;
  inputIcon?: React.ReactNode;
  inputButton?: React.ReactNode;
  onChange?: (e: ChangeEvent) => void;
  onBlur?: (e: FocusEvent<HTMLInputElement>) => void;
  value: string | number;
  errorMsg: FormikErrors<FormikValues> | boolean;
  id: string;
  name?: string;
  type: string;
  placeholder: string;
  labelText: string;
  className?: string;
  forgotPassword?: string;
  forgotRoute?: string;
}

const Input: React.FC<Iinput> = ({
  inputValidate,
  inputIcon,
  inputButton,
  onChange,
  onBlur,
  value,
  errorMsg,
  id,
  name,
  type,
  placeholder,
  labelText,
  className,
  forgotPassword,
  forgotRoute,
}) => {
  const router = useRouter();

  return (
    <div className={`${classes.container} ${className}`}>
      <div className={classes.label__container}>
        <label
          htmlFor="email"
          style={{ color: inputValidate ? "#cc0000" : "" }}
        >
          {labelText}
        </label>
        {forgotPassword && (
          <p
            className={classes.forgot}
            onClick={() => router.push(forgotRoute as string)}
          >
            {forgotPassword}
          </p>
        )}
      </div>
      <div
        className={`${classes.input__container} ${
          inputValidate ? classes.input__error : null
        }`}
      >
        {inputIcon}
        <input
          id={id}
          name={name}
          type={type}
          placeholder={placeholder}
          onChange={onChange}
          onBlur={onBlur}
          value={value}
          required
        />
        {inputButton}
      </div>
      <AnimatePresence>
        {inputValidate ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className={classes.error__input}
          >
            {errorMsg as any}
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
};
export default Input;
