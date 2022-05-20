function Header(props) {
  return <div>Level Three username: {props.username} </div>;
}

function Main(props) {
  return <div>Main{props.children}</div>;
}

function Profile(props) {
  return <div>Profile{props.children}</div>;
}

export default function ChildrenProp() {
  const username = 'Karl';

  return (
    <div>
      <div>top component username: {username}</div>
      <Profile>
        <Main>
          <Header username={username} />
        </Main>
      </Profile>
    </div>
  );
}
