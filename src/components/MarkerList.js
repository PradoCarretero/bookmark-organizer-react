/* import "../styles/MarkerList.scss"; */
import MarkerItem from "./MarkerItem";
import propTypes from "prop-types";
import { Link } from "react-router-dom";

function MarkerList(props) {
  const { markerList } = props;
  const htmlMarkers = markerList.map((marker, index) => {
    return <MarkerItem key={index} marker={marker} />;
  });
  const addMarker = (
    <Link to="/marker-form">
      <li className="marker">+</li>
    </Link>
  );

  return (
    <>
      {markerList.length === 0 ? (
        <p>Cargando datos...</p>
      ) : (
        <ul>{htmlMarkers}</ul>
      )}
      {addMarker}
    </>
  );
}
MarkerList.defaultProps = {
  markerList: [],
};

MarkerList.propTypes = {
  markerList: propTypes.arrayOf(propTypes.object),
};
export default MarkerList;
