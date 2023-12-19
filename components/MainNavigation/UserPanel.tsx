import classes from "./UserPanel.module.css";
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";

const UserPanel: React.FC = () => {
  const { data: session } = useSession() as any;
  const user = session?.user.id;

  console.log(user);

  const username = session.user.firstName
    ? session.user.firstName
    : session?.user?.email;

  return (
    <div className={classes.container}>
      <h3>Hello {username}!</h3>
      <ul>
        <li>Your account</li>
        <li>Orders</li>
        <li>Return product</li>
        <li onClick={() => signOut()} className={classes.signout}>Sign out</li>
      </ul>
    </div>
  );
};

export default UserPanel;
