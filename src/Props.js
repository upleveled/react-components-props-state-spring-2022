// 3. Name the parameter "props" - this is the
// object containing all of your props
function Greeting(props) {
  console.log('props', props);
  return (
    <h2>
      Hello
      {/* 4. Use the prop value */}
      {props.userName}
    </h2>
  );
}

export default function Props() {
  // 1. Defining the values to be used in the props
  const userName = 'Lukas';

  return (
    <Greeting
      // 2. Pass the props
      userName={userName}
      abc={123}
    />
  );
}
