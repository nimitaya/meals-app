# React API Mini Projekt

## Projektbeschreibung

- Dieses Projekt ist ein Mini-Projekt, das die Verwendung von React-APIs demonstriert.
- Es zeigt wie man:
  - React-Router-DOM V6 einstellen kann
  - Outlet und Link verwenden kann
  - NavLinks stylen kann
  - Fetch API in externe Datei auslagern kann
  - React Hooks( useState, useEffect)

## Wie soll das Projekt aussehen?

- Diese Schritte in der Anwendungsentwicklung sind wichtig:

  - Planung
  - Design
  - Implementierung

- Plannung und design brauchen viel Zeit (c.a 80%)
  - du muss viel überlegen und skizzieren
  - wie soll die verschiedenen Komponenten aussehen
  - wie soll die UI aussehen
  - Welche funktionalitäten soll die Anwendung haben (aus User-Sicht!)
- Implementierung ist öfters sehr einfach (c.a 20%)

## Pakete

- [Vite Projekt mit TailwindCss V4 erstellen](https://ndimoforaretas.github.io/posts/add-tailwindcss4-to-react-vite-copy/)
- [DaisyUI V5 hinzufügen](https://v5.daisyui.com/components/)
- React-Router-DOM V6 `npm install react-router-dom@6`

## Projektstruktur

- src
  - components
    - CardItemComponent.jsx
    - FooterComponent.jsx
    - HeaderComponent.jsx
    - NavLayoutComponent.jsx
  - assets
    - images
  - pages
    - HomePage.jsx
    - AboutPage.jsx
    - MealsPage.jsx
    - MealDetailsPage.jsx
    - ErrorPage.jsx
  - data
    - MealsData.js
  - utilities
    - fetchAPI.js
  - App.jsx
  - index.jsx

## Schritte Nach Installation

## Resourcen

- [Used API TheMealDB](https://www.themealdb.com/api.php)
- [Convert JSON to JS Objekt](https://www.convertsimple.com/convert-json-to-javascript/)
- [Install TailwindCss V4 in React Vite](https://ndimoforaretas.github.io/posts/add-tailwindcss4-to-react-vite-copy/)
- [Add DaisyUI V5 to TailwindCss V4](https://v5.daisyui.com/components/)

---
---
---

# React API Mini Projekt

## Projektbeschreibung

- Dieses Projekt ist ein Mini-Projekt, das die Verwendung von React-APIs demonstriert.
- Es zeigt wie man:
  - React-Router-DOM V6 einstellen kann
  - Outlet und Link verwenden kann
  - NavLinks stylen kann
  - Fetch API in externe Datei auslagern kann
  - React Hooks( useState, useEffect)

## Wie soll das Projekt aussehen?

- Diese Schritte in der Anwendungsentwicklung sind wichtig:

  - Planung
  - Design
  - Implementierung

- Plannung und design brauchen viel Zeit (c.a 80%)
  - du muss viel überlegen und skizzieren
  - wie soll die verschiedenen Komponenten aussehen
  - wie soll die UI aussehen
  - Welche funktionalitäten soll die Anwendung haben (aus User-Sicht!)
- Implementierung ist öfters sehr einfach (c.a 20%)

## Pakete & Setup

- [Vite Projekt mit TailwindCss V4 erstellen](https://ndimoforaretas.github.io/posts/add-tailwindcss4-to-react-vite-copy/)
- [DaisyUI V5 hinzufügen](https://v5.daisyui.com/components/)
- React-Router-DOM V6 `npm install react-router-dom@6`

## Resourcen

- [Convert JSON to JS Objekt](https://www.convertsimple.com/convert-json-to-javascript/)
- [Install TailwindCss V4 in React Vite](https://ndimoforaretas.github.io/posts/add-tailwindcss4-to-react-vite-copy/)
- [Add DaisyUI V5 to TailwindCss V4](https://v5.daisyui.com/components/)

### Projektstruktur

- src
  - components
    - CardItemComponent.jsx
    - FooterComponent.jsx
    - HeaderComponent.jsx
    - NavLayoutComponent.jsx
  - assets(schon vorhanden)
    - images
  - pages
    - HomePage.jsx Apple Frangipan Tart
    - AboutPage.jsx
    - MealsPage.jsx
    - MealsDetailsPage.jsx
    - NotFoundPage.jsx
  - utilities(für Helper-Funktionen)
    - fetchAPI.js
  - App.jsx
  - index.jsx

### Schritte Nach Installation

- Erstelle die Ordnerstruktur (jeder Komponent oder Page kann einfach mit `rafce` erstellt werden (um die Boilerplate zu erstellen))
- Erstelle die Navigation

```jsx
// In HeaderComponent.jsx
import { NavLink, Link } from "react-router-dom";

const HeaderComponent = () => {
  return (
    <>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/about">Über Uns</NavLink>
              </li>
              <li>
                <NavLink to="/meals">Meals</NavLink>
              </li>
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost text-xl">
            RMeals
          </Link> Apple Frangipan Tart
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">Über Uns</NavLink>
            </li>
            <li>
              <NavLink to="/meals">Meals</NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
    </>
  );
};
export default HeaderComponent;
```

- Erstelle die Layout-Komponente

```jsx
// In NavLayoutComponent.jsx
import { Outlet } from "react-router-dom";
import HeaderComponent from "./HeaderComponent";
import FooterComponent from "./FooterComponent";

const NavLayoutComponent = () => {
  return (
    <>
      <HeaderComponent />
      <Outlet />
      <FooterComponent />
    </>
  );
};
export default NavLayoutComponent;
```

- Erstelle die Navigation in App.jsx

```jsx
// In App.jsx
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavLayoutComponent from "./components/NavLayoutComponent";
import AboutPage from "./page/AboutPage";
import HomePage from "./page/HomePage";
import MealsPage from "./page/MealsPage";
import NotFoundPage from "./page/NotFoundPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavLayoutComponent />}>
          <Route index element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/meals" element={<MealsPage />} />
          {/*
          - TODO :Route mit Parameter Kommt hier */}
          {/* Wildcard sign (*) */}
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
```

- Erstelle die FetchAPI Funktion in `utilities/fetchAPI.js`
- Diese Funktion wird benutzt um Daten von einer API zu holen

```jsx
// Normalweise um Information aus API zu rufen brauchen wir
// - fetch-Methode (fetch())
// - die URL als Parameter
// - Async/await - Try/catch

export async function fetchData(url) {
  // Daten über Fetch abrufen mit await
  const response = await fetch(url);

  // wenn respone NICHT OK ist
  if (!response.ok) {
    // erstelle new Fehler und Throw
    throw new Error("Fehler bei fetch");
  }

  // Daten als Json parsen und zurückgeben
  return response.json();
}
```

- Bau die `MealsPage` Komponente
  - du kannst erstmal nur die Namen der Essen anzeigen

```jsx
// In MealsPage.jsx
import { useState, useEffect } from "react";

import CardItemComponent from "../components/CardItemComponent";
import { fetchData } from "../utilities/apiFetch.js";

const MealsPage = () => {
  const [essen, setEssen] = useState([]);

  const mealsUrl = "https://www.themealdb.com/api/json/v1/1/search.php?f=a";

  useEffect(() => {
    async function fetchMeals() {
      try {
        const data = await fetchData(mealsUrl);
        console.log("From API", data.meals);
        setEssen(data.meals);
      } catch (error) {
        console.error(error.message);
      }
    }

    fetchMeals();
  }, []);

  return (
    <div className="container mx-auto p-4">
      {essen.length > 0 ? (
        essen.map((food) => <p key={food.idMeal}>{food.strMeal}</p>)
      ) : (
        <p>Kein Essen is da </p>
      )}
      <CardItemComponent />
    </div>
  );
};
export default MealsPage;
```

- Hole dir eine passende Komponent aus [DaisyUI](https://v5.daisyui.com/components/)
- Erstelle die `CardItemComponent` Komponente

```jsx
const CardItemComponent = () => {
  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <figure>
        <img
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          Card Title
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>
          A card component has a figure, a body part, and inside body there are
          title and actions parts
        </p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">Fashion</div>
          <div className="badge badge-outline">Products</div>
        </div>
      </div>
    </div>
  );
};
export default CardItemComponent;
```

- Du kannst die `CardItemComponent` in `MealsPage` Komponente verwenden
- Das Ziel ist die informationen von API zu holen und in der Karte anzeigen
- Das heißt, du musst überlegen welche Informationen du von API brauchst und dann als `Props` an `CardItemComponent` übergeben
