import { AlertTriangle, Ban, CheckCheck, Info, X } from "lucide-react";
import { ReactNode } from "react";
import { AlertType } from "../types/AlertType";
interface IAlert {
  id: number;
  title: string;
  icon: ReactNode;
  iconClose: ReactNode;
  className: AlertType;
  description?: string;
}
export const alertData: IAlert[] = [
  {
    id: 1,
    title: "Something went wrong",
    className: "alert-error",
    icon: <Ban size={20} />,
    iconClose: <X style={{ cursor: "pointer" }} />,
  },
  {
    id: 2,
    title: "Tips & Tricks",
    className: "alert-warning",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur temporibus doloremque praesentium laboriosam iste totam officiis beatae sint non quas.",
    icon: <AlertTriangle size={20} />,
    iconClose: <X style={{ cursor: "pointer" }} />,
  },
  {
    id: 3,
    title: "Your order has been processed",
    className: "alert-success",
    icon: <CheckCheck size={20} />,
    iconClose: <X style={{ cursor: "pointer" }} />,
  },
  {
    id: 4,
    title: "Note",
    className: "alert-info",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur temporibus doloremque praesentium laboriosam iste totam officiis beatae sint non quas.",
    icon: <Info size={20} />,
    iconClose: <X style={{ cursor: "pointer" }} />,
  },
  {
    id: 5,
    title: "Note",
    className: "alert-default",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur temporibus doloremque praesentium laboriosam iste totam officiis beatae sint non quas.",
    icon: <Ban size={20} />,
    iconClose: <X style={{ cursor: "pointer" }} />,
  },
];
