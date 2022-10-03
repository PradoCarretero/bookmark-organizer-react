import "../styles/App.scss";
import "../styles/core/reset.scss";
import { Routes, Route } from "react-router-dom";
import PageNotFound from "./PageNotFound";
import NewMarker from "./NewMarker";

function App() {
  const handleClickBtn = (ev) => {
    ev.preventDefault();
  };
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <header>Bookmark Organize</header>
              <main>
                <section>
                  <button className="marker" onClick={handleClickBtn}></button>
                </section>
              </main>
              <footer>By Prado Carretero</footer>
            </>
          }
        />
        {/*  <Route path="/new-marker" element={<NewMarker />} /> */}
        {/*   <Route path="*" element={<PageNotFound />} /> */}
      </Routes>
    </>
  );
}

export default App;
