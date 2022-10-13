import { useContext } from "react";
import "./Home.css";
import Ubications from "../../components/Ubication/Ubications";
import { UbicationContext } from "../../context/UbicationContext";

const Home = () => {
  const { ubications } = useContext(UbicationContext);
  return (
    <div className="main-container">
      <Ubications ubications={ubications} />
    </div>
  );
};

export default Home;
