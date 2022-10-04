function MarkerItem(props) {
  const { id, url } = props.marker;
  return (
    <>
      <li key={props.marker.id}>
        <h2>{url}</h2>
      </li>
    </>
  );
}
/* MarkerItem.defaultProps = {
  marker: {
    id: "Not defined",
    url: "Not defined",
  },
}; */
export default MarkerItem;
