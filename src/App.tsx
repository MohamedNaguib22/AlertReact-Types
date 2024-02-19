import Alert from "./Components/Alert/Alert";
import { alertData } from "./Data/AlertData";

const App = () => {
  return (
    <div style={{ paddingLeft: "50px", paddingRight: "50px" }}>
      {alertData.map((alert) => (
        <Alert
          className={alert.className}
          icon={alert.icon}
          title={alert.title}
          description={alert.description}
          iconClose={alert.iconClose}
          key={alert.id}
        >
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita est
          corporis perferendis minus? Doloremque corporis vitae sunt odio sint
          quo nobis magnam exercitationem tenetur fugiat.
        </Alert>
      ))}
    </div>
  );
};

export default App;
