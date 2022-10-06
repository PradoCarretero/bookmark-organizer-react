function Button(props) {
  return (
    <button type={props.type} onClick={props.function}>
      {props.children}
    </button>
  );
}

export default Button;
