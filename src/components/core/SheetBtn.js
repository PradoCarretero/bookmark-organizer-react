function SheetBtn(props) {
  return (
    <div>
      <label htmlFor={props.sheetName} type="radio">
        {props.sheetName}
      </label>
      <input
        onChange={props.handleSheet}
        type="radio"
        id={props.sheetName}
        value={props.sheetName}
        name="Sheetoptions"
      />
    </div>
  );
}

export default SheetBtn;
