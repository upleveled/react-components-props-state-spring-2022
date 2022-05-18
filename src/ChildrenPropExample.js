function OtherComponent(props) {
  console.log('this are the props of the component', props);
  return <div>{props.children}</div>;
}

export default function ChildrenPropExample() {
  return (
    <>
      <h1>My Parent Title</h1>
      <OtherComponent number={123}>
        <h1>This is the children title</h1>
        <p>This is some text</p>
      </OtherComponent>
    </>
  );
}
