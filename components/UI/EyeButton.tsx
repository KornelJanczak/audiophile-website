import EyeIcon from "@/public/Icons/EyeIcon";
import EyeSlashIcon from "@/public/Icons/EyeSlashIcon";

interface IEyeButton {
  onClick: () => void;
  viewText: boolean;
}

const EyeButton: React.FC<IEyeButton> = ({ onClick, viewText }) => {
  return (
    <button onClick={onClick} type="button">
      {viewText ? <EyeSlashIcon /> : <EyeIcon />}
    </button>
  );
};

export default EyeButton;
