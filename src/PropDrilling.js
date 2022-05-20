function Header(props) {
  return <div>Level Three username: {props.username} </div>;
}

function Main(props) {
  return <Header username={props.username} />;
}

function Profile(props) {
  return <Main username={props.username} />;
}

export default function PropDrilling() {
  const username = 'Karl';

  return (
    <>
      <div>top component username: {username}</div>
      <Profile username={username} />
    </>
  );
}
