import SheetBtn from "./core/SheetBtn";

function Aside(props) {
  const handleSheet = () => {
    props.handleSheetInfo();
  };
  return (
    <aside>
      <nav>
        <SheetBtn handleSheet={handleSheet} sheetName="Trabajo" />
        <SheetBtn handleSheet={handleSheet} sheetName="Estudio" />
        <SheetBtn handleSheet={handleSheet} sheetName="Ocio" />
      </nav>
    </aside>
  );
}

export default Aside;
