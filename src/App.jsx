import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavLayout from "./components/NavLayout";
import Home from "./pages/Home";
import Meals from "./pages/Meals";
import MealDetails from "./pages/MealDetails";
import About from "./pages/About";
import Error from "./pages/Error";
import DarkModeProvider from "./contexts/DarkMode";

function App() {
  return (
    <>
      <BrowserRouter>
        <DarkModeProvider>
          <Routes>
            <Route path="/" element={<NavLayout />}>
              <Route index element={<Home />} />
              <Route path="meals" element={<Meals />} />
              <Route path="meals/:id" element={<MealDetails />} />
              <Route path="about" element={<About />} />
              <Route path="*" element={<Error />} />
            </Route>
          </Routes>
        </DarkModeProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
