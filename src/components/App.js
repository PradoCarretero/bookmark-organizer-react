import "../styles/App.scss";
import "../styles/core/reset.scss";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
/* import PageNotFound from "./PageNotFound"; */
import MarkerForm from "./MarkerForm";
import MarkerPage from "./MarkerPage";

function App() {
  const [markerList, setMarkerList] = useState([]);
  const [newMarker, setNewMarker] = useState({
    id: "",
    url: "",
    sheet: "",
  });
  const changeData = (valueInput) => {
    setNewMarker({
      ...newMarker,
      url: valueInput,
    });
    console.log(newMarker);
  };

  const addMarker = () => {
    setMarkerList([...markerList, newMarker]);
  };

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <MarkerPage markerList={markerList} />
            </>
          }
        />
        <Route
          path="/work-sheet"
          element={
            <>
              <MarkerPage markerList={markerList} />
            </>
          }
        />
        <Route
          path="/marker-form"
          element={
            <MarkerForm
              newMarker={newMarker}
              changeData={changeData}
              addMarker={addMarker}
            />
          }
        />
        {/* <Route path="*" element={<PageNotFound />} /> */}
      </Routes>
    </>
  );
}

export default App;
