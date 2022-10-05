import MarkerList from "./MarkerList";
import Header from "./Header";
import Footer from "./Footer";

function MarkerPage(props) {
  return (
    <>
      <Header />
      <main>
        <MarkerList markerList={props.markerList} />
      </main>
      <Footer />
    </>
  );
}

export default MarkerPage;
