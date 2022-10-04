import Header from "./Header";
function MarkerForm(props) {
  const handleInput = (ev) => {
    const nombreInput = ev.target.id;
    const valueInput = ev.target.value;
    props.changeData(nombreInput, valueInput);
  };
  return (
    <>
      <Header />
      <main>
        <form action="">
          <label htmlFor="">Añadir un nuevo enlace </label>
          <input
            type="text"
            id="marker"
            value={props.newMarker.url}
            onChange={handleInput}
          />
        </form>
      </main>
    </>
  );
}

export default MarkerForm;
