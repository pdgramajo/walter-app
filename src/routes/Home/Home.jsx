import { useContext } from "react";
import "./Home.css";
import Palettes from "../../components/Palette/Palettes";
import { ColorPalettesContext } from "../../context/ColorPalettesContext";

const Home = () => {
  const { colorPalettes } = useContext(ColorPalettesContext);
  return (
    <div className="main-container">
      <Palettes palettes={colorPalettes} />
    </div>
  );
};

export default Home;
