import MarkerList from "./MarkerList";
import Header from "./Header";
import Footer from "./Footer";
import Aside from "./Aside";

function MarkerPage(props) {
  return (
    <>
      <Header />
      <Aside handleSheetInfo={props.handleSheetInfo} />
      <main>
        <MarkerList markerList={props.markerList} />
      </main>
      <Footer />
    </>
  );
}

export default MarkerPage;
