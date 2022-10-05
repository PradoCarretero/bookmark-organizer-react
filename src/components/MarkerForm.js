import Header from "./Header";
import { Link } from "react-router-dom";

function MarkerForm(props) {
  const handleInput = (ev) => {
    const valueInput = ev.target.value;
    props.changeData(valueInput);
  };
  const saveNewMarker = (ev) => {
    props.addMarker();
  };
  return (
    <>
      <Header />
      <main>
        <form action="">
          <label htmlFor="">Añadir un nuevo enlace </label>
          <input
            type="text"
            id="markerurl"
            value={props.newMarker.url}
            onChange={handleInput}
          />
          <Link onClick={saveNewMarker} role="button" to="/">
            Guardar
          </Link>
        </form>
      </main>
    </>
  );
}

export default MarkerForm;
