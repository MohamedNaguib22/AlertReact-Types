import { useState } from "react";
import Alert from "./Components/Alert/Alert";
import { alertData } from "./Data/AlertData";

const App = () => {
  // ! Hooks
  const [alert, setAlerts] = useState(alertData);

  //  ** AlertFunction
  const handelDelete = (id:number) => {
    const newData = alert.filter((i) => i.id !== id);
    setAlerts(newData);
  };
  // ** Render
  const dataAlert = alert.map((ale) => (
    <Alert
      className={ale.className}
      icon={ale.icon}
      title={ale.title}
      description={ale.description}
      key={ale.id}
      onDelete={()=>handelDelete(ale.id)}
    >
      n ty Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita
      est corporis perferendis minus? Doloremque corporis vitae sunt odio sint
      quo nobis magnam exercitationem tenetur fugiat.
    </Alert>
  ));

  return (
    <div style={{ paddingLeft: "50px", paddingRight: "50px" }}>{dataAlert}</div>
  );
};

export default App;
