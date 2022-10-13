import "./App.css";
import { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home/Home";
import LoginRef from "./routes/Login/LoginRef";
import UbicationCreation from "./routes/Ubication/UbicationCreation";
import UbicationDisplay from "./routes/Ubication/UbicationDisplay";
import { UserContext } from "./context/UserContext";
import UbicationEdit from "./routes/Ubication/UbicationEdit";

function App() {
  const { currentUser } = useContext(UserContext);

  return (
    <div className="App">
      <Routes>
        <Route index element={<LoginRef />} />
        {currentUser && (
          <>
            <Route path="/home" element={<Home />} />
            <Route path="ubication/:id" element={<UbicationDisplay />} />
            <Route path="ubication/:id/edit" element={<UbicationEdit/>} />
            <Route path="ubication/create" element={<UbicationCreation />} />
          </>
        )}
      </Routes>
    </div>
  );
}

export default App;
