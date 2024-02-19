import { ReactNode } from "react";
import "./index.scss";
import { AlertType } from "../../types/AlertType";
interface IProps {
  title: string;
  icon: ReactNode;
  iconClose: ReactNode;
  className: AlertType;
  children?: ReactNode;
  description?: string;
}
const Alert = ({
  className = "alert-error",
  title,
  icon,
  children,
  description,
  iconClose,
}: IProps) => {
  return (
    <div className={className}>
      <div className="alert-header">
        <div className="alert-flex">
          {icon}
          <h3>{title}</h3>
        </div>
        {iconClose}
      </div>
      <div>{children ? children : description}</div>
    </div>
  );
};

export default Alert;
