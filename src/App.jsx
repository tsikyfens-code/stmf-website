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
import Recrutement from "./pages/Recrutement/Recrutement";
import Contact from "./pages/Contact/Contact";


function App() {
  return (
    <BrowserRouter>

      <Header />

      <main>

        <Routes>

          <Route
            path="/"
            element={<Accueil />}
          />

          <Route
            path="/en-savoir-plus"
            element={<EnSavoirPlus />}
          />

          <Route
            path="/a-propos"
            element={<APropos />}
          />

          <Route
            path="/recrutement"
            element={<Recrutement />}
          />

          <Route
            path="/contact"
            element={<Contact />}
          />

        </Routes>

      </main>

      <Footer />

    </BrowserRouter>
  );
}


export default App;