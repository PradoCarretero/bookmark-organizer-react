function Button(props) {
  return (
    <button type="button" onClick={props.function}>
      {props.children}
    </button>
  );
}

export default Button;
