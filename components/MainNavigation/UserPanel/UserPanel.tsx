import classes from "./UserPanel.module.css";
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";
import { motion } from "framer-motion";
import Overlay from "@/components/UI/Overlay";
import { useRouter } from "next/navigation";

const UserPanel: React.FC<{ closePanel: () => void }> = ({ closePanel }) => {
  const { data: session } = useSession() as any;

  const username = session?.user?.firstName
    ? session.user.firstName
    : session?.user?.email;

  const router = useRouter();

  return (
    <>
      <Overlay position={{ top: "9.8rem", left: 0 }} onOverlay={closePanel} />
      <motion.div
        className={classes.container}
        transition={{ duration: 0.2 }}
        variants={{
          hidden: { opacity: 0, y: -35 },
          visible: { opacity: 1, y: -10 },
        }}
        initial="hidden"
        animate="visible"
        exit="hidden"
      >
        <h3>Hello {username}!</h3>
        <ul>
          <li>Your account</li>
          <li onClick={() => router.push("/password-reset")}>Reset Password</li>
          <li onClick={() => router.push("/orders/last")}>Orders</li>
          <li onClick={() => signOut()} className={classes.signout}>
            Sign out
          </li>
        </ul>
      </motion.div>
    </>
  );
};

export default UserPanel;
