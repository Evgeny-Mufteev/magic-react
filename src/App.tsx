import { Route, Routes } from "react-router-dom";
import "./styles/index.scss";
import { Link } from "react-router-dom";
import { AboutPageAsync } from "./pages/AboutPage/AboutPage.async";
import { MainPageAsync } from "./pages/MainPage/MainPage.async";
import { Suspense, useContext } from "react";
import { useTheme } from "./theme/useTheme";



const App = () => {

  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`app ${theme}`} >
      <button onClick={toggleTheme}>toggle</button>
      <Link to={"/"}>Главаная</Link>
      <Link to={"/about"}>О сайте</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={"/about"} element={<AboutPageAsync />} />
          <Route path={"/"} element={<MainPageAsync />} />
        </Routes>
      </Suspense>
    </div >
  )
}

export default App