import { ReactNode } from "react";
import "./index.scss";
import { X } from "lucide-react";
import { AlertType } from "../../types/AlertType";
interface IProps {
  title: string;
  icon: ReactNode;
  className: AlertType;
  children?: ReactNode;
  description?: string;
  onDelete: () => void;
}
const Alert = ({
  className = "alert-error",
  title,
  icon,
  children,
  description,
  onDelete,
}: IProps) => {
  return (
    <div className={className}>
      <div className="alert-header">
        <div className="alert-flex">
          {icon}
          <h3>{title}</h3>
        </div>
        <X onClick={onDelete} style={{ cursor: "pointer" }} />
      </div>
      <div>{children ? children : description}</div>
    </div>
  );
};

export default Alert;
