import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Page Accueil */}
        <Route
          path="/"
          element={<h1>Accueil</h1>}
        />

        {/* Page En savoir plus */}
        <Route
          path="/en-savoir-plus"
          element={<h1>En savoir plus</h1>}
        />

        {/* Page À propos */}
        <Route
          path="/a-propos"
          element={<h1>À propos</h1>}
        />

        {/* Page Recrutement */}
        <Route
          path="/recrutement"
          element={<h1>Recrutement</h1>}
        />

        {/* Page Contact */}
        <Route
          path="/contact"
          element={<h1>Contact</h1>}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;