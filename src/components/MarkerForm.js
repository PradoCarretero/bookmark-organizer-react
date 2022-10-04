import Header from "./Header";
import Button from "./Button";
import { Link } from "react-router-dom";

function MarkerForm(props) {
  const handleInput = (ev) => {
    const valueInput = ev.target.value;
    props.changeData(valueInput);
  };
  const saveNewMarker = (ev) => {
    ev.preventDefault();
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
          <Link to="/">
            {/* resolver esto para que vuelva a la principal */}
            <Button function={saveNewMarker}>Guardar</Button>
          </Link>
        </form>
      </main>
    </>
  );
}

export default MarkerForm;
