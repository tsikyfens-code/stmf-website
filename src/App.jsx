import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import Accueil from "./pages/Accueil/Accueil";
import EnSavoirPlus from "./pages/EnSavoirPlus/EnSavoirPlus";
import APropos from "./pages/APropos/APropos";


function App() {
  return (
    <BrowserRouter>

      <Header />

      <main>

        <Routes>

          {/* Accueil */}
          <Route
            path="/"
            element={<Accueil />}
          />


          {/* En savoir plus */}
          <Route
            path="/en-savoir-plus"
            element={<EnSavoirPlus />}
          />


          {/* À propos */}
          <Route
            path="/a-propos"
            element={<APropos />}
          />


          {/* Recrutement */}
          <Route
            path="/recrutement"
            element={<h1>Recrutement</h1>}
          />


          {/* Contact */}
          <Route
            path="/contact"
            element={<h1>Contact</h1>}
          />

        </Routes>

      </main>

      <Footer />

    </BrowserRouter>
  );
}


export default App;