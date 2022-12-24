const Card = (props) => {
  // important:
  // our own custom components must have the following
  const classes = "card " + props.className;

  // this allows to create wrapper components
  return <div className={classes}>{props.children}</div>;
};

export default Card;
