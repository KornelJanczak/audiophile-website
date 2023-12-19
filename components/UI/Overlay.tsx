import { IOverlayProps } from "@/models/@type-props";
import { motion } from "framer-motion";

const Overlay: React.FC<IOverlayProps> = ({
  onOverlay,
  children,
  position,
  delay,
}) => {
  const { top, left } = position!;

  return (
    <motion.div
      onClick={onOverlay}
      style={{
        position: "fixed",
        top: top,
        left: left,
        pointerEvents: "auto",
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100%",
        zIndex: 2,
        backgroundColor: "rgba(0, 0, 0, 0.65)",
        transition: "background-color 0.3s ease",
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        duration: 0.3,
        delay: delay ? delay : 0.1,
        ease: [0, 0.71, 0.2, 1.01],
      }}
    >
      {children}
    </motion.div>
  );
};

export default Overlay;
