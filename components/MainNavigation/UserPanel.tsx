import classes from "./UserPanel.module.css";
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";
import { motion } from "framer-motion";

const UserPanel: React.FC = () => {
  const { data: session } = useSession() as any;
  const user = session?.user.id;

  console.log(user);

  const username = session?.user?.firstName
    ? session.user.firstName
    : session?.user?.email;

  return (
    <motion.div
      className={classes.container}
      transition={{ duration: 0.2 }}
      variants={{
        hidden: { opacity: 0, y: -50 },
        visible: { opacity: 1, y: -10 },
      }}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      <h3>Hello {username}!</h3>
      <ul>
        <li>Your account</li>
        <li>Orders</li>
        <li>Return product</li>
        <li onClick={() => signOut()} className={classes.signout}>
          Sign out
        </li>
      </ul>
    </motion.div>
  );
};

export default UserPanel;
